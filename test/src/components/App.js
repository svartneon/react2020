import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form.js';
import Footer from './Footer.js';
import Pokemon from './Pokemon.js';
import translations from '../locales/translations.js';
import LanguageContext from './LanguageContext.js';
import StyledHeader from './StyledHeader.js';
import StyledWrapper from './StyledWrapper.js';
import StyledBody from './StyledBody.js';
import swe from './../images/swe.svg';
import eng from './../images/eng.svg';

function App() {

  const [element, setElement] = useState(1);
  const [gender, setGender] = useState("female");
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [showOpponent, setShowOpponent] = useState(false);
  const [opponent, setOpponent] = useState({});
  const [fighter, setFighter] = useState({});
  const [locale, setLocale] = useState("en");

  const handleElementChange = (event) => setElement(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);



  useEffect(() => {
    document.title = count + " pokémons generated";
  }, [count]);

  useEffect(() => {
    fetchRandomPokemon();
  }, []);


  function handleSubmit(event) {
    event.preventDefault();
    setCount(count + 1);
    fetchAllPokemonOfType(element);
    setShowOpponent(true);
  }

  function fetchAllPokemonOfType() {
    axios.get("https://pokeapi.co/api/v2/type/" + element)
      .then(res => {
        fetchRandomPokemonOfType(res.data);
      })
  }

  function fetchRandomPokemonOfType(data) {
    const randomIndex = Math.floor(Math.random() * (data.pokemon.length - 1));
    const pokemon = data.pokemon[randomIndex];

    axios.get(pokemon.pokemon.url)
      .then(res => {
        if (res.data.sprites.other.dream_world.front_default) {
          setFighter({
            ...fighter,
            name: name,
            image: <img src={res.data.sprites.other.dream_world.front_default} alt="Your Fighter" id="fighter" />,
            type: "type(s):" + getAllTypes(res.data.types),
            gender: "gender: " + gender,
            species: "species: " + res.data.species.name,
            hp: "hp: " + res.data.stats[0].base_stat
          });
        }
        else {
          //if the pokemon has no image, get another one
          fetchRandomPokemonOfType(data);
        }
      })
  }

  function fetchRandomPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * (600)))
      .then(res => {
        setOpponent({
          ...opponent,
          image: <img src={res.data.sprites.other.dream_world.front_default} alt="Your Opponent" />,
          type: "type(s):" + getAllTypes(res.data.types),
          gender: "gender: " + gender,
          species: "species: " + res.data.species.name,
          hp: "hp: " + res.data.stats[0].base_stat
        })
      })
  }

  function getAllTypes(typeList) {
    console.log(typeList);
    let types = "";
    for (let i = 0; i < typeList.length; i++) {
      types += " " + translations[locale][typeList[i].type.name] + ","
    }
    //remove last comma
    return types.slice(0, -1);
  }

  return (
    <LanguageContext.Provider value={locale}>
      <StyledWrapper>
        <StyledHeader className="Header">
          <h1>{translations[locale]['pokemon-battle']}</h1>
          <div>
            <img src={eng} alt="eng" onClick={() => setLocale('en')} flag="swe" />
            <img src={swe} alt="swe" onClick={() => setLocale('sv')} flag="eng" />
          </div>
        </StyledHeader>
        <StyledBody>
          <Form
            element={element} elementHandler={handleElementChange}
            submitHandler={handleSubmit}
            gender={gender} genderHandler={handleGenderChange}
            name={name} nameHandler={handleNameChange}
          />
          <Pokemon
            pokemon={fighter}
            line={translations[locale]['your-pokemon']}
            contrast="contrast(100%)"
            visibility="visible"
          />
          <Pokemon
            pokemon={opponent}
            line={translations[locale]['opponent']}
            contrast={showOpponent ? "contrast(100%)" : "contrast(0%)"}
            visibility={showOpponent ? "visible" : "hidden"}
          />
        </StyledBody>
        <Footer />
      </StyledWrapper>
    </LanguageContext.Provider>
  );
}

export default App;
