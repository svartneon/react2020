import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Form from './Form.js';
import Footer from './Footer.js';
import styled from 'styled-components';
import Pokemon from './Pokemon.js';
import './../styles/App.css';
import translations from '../locales/translations.js';
import LanguageContext from './LanguageContext.js';
import swe from './../images/swe.svg'
import eng from './../images/eng.svg'



export const StyledHeader = styled.header`
display: flex;
align-items: center;
background-color: rgb(171, 236, 236);
height: 100px;
font-size: 20px;  
padding-top: 60px;
padding-bottom: 20px;
color: rgb(83, 99, 99);
flex-direction: row;
.flags{
  float: right;
}
  .flags > .flag{
    width: 30px;
    padding: 5px;
  }
`


function App() {

  const [element, setElement] = useState(1);
  const [gender, setGender] = useState("female");
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [classNameOpponent, setclassNameOpponent] = useState("Opponent-hidden");
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
    setclassNameOpponent("Opponent-visible");
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
    <div className="Wrapper">
    <StyledHeader>
      <h1>{translations[locale]['pokemon-battle']}</h1>
        <div className="flags">
          <img src={eng} alt="eng" onClick={() => setLocale('en')} flag="swe" className="flag"/>
          <img src={swe} alt="swe" onClick={() => setLocale('sv')} flag="eng" className="flag"/>
        </div> 
    </StyledHeader>
      <div className="Body">
        <Form
          element={element} elementHandler={handleElementChange}
          submitHandler={handleSubmit}
          gender={gender} genderHandler={handleGenderChange}
          name={name} nameHandler={handleNameChange}
        />
        <div className="Result">
          <h2>{translations[locale]['your-pokemon']}</h2>
          <Pokemon pokemon={fighter} />
        </div>
        <div className={classNameOpponent}>
          <h2>{translations[locale]['opponent']}</h2>
          <Pokemon pokemon={opponent} />
        </div>
      </div>
      <Footer />
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
