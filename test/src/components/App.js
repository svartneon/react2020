import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import Form from './Form.js';
import Footer from './Footer.js';
import Pokemon from './Pokemon.js';
import translations from '../locales/translations.js';
import {randomInteger, randomGender} from '../helpers/randomizer.js';
import {formReducer, initialForm} from '../reducers/formReducer.js';
import {pokemonReducer, initialFighter, initialOpponent} from '../reducers/pokemonReducer.js';
import LanguageContext from './LanguageContext.js';
import StyledHeader from './StyledHeader.js';
import StyledWrapper from './StyledWrapper.js';
import StyledBody from './StyledBody.js';
import swe from './../images/swe.svg';
import eng from './../images/eng.svg';

function App() {

  const [count, setCount] = useState(0);
  const [showOpponent, setShowOpponent] = useState(false);
  const [locale, setLocale] = useState("en");

  const [formState, fReducer] = useReducer(formReducer, initialForm);
  const [fighterState, fighterReducer] = useReducer(pokemonReducer, initialFighter);
  const [opponentState, opponentReducer] = useReducer(pokemonReducer, initialOpponent);

  useEffect(() => {
    document.title = count + " pokémons generated";
  }, [count]);

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setCount(count + 1);
    fetchAllPokemonOfType(formState.type);
    setShowOpponent(true);
  }

  async function fetchAllPokemonOfType() {
    await axios.get("https://pokeapi.co/api/v2/type/" + formState.type)
      .then(res => {
        fetchRandomPokemonOfType(res.data);
      })
      .catch(error => console.log(error));
  }

  async function fetchRandomPokemonOfType(data) {

    const pokemon = data.pokemon[randomInteger(0, data.pokemon.length - 1)];
    await axios.get(pokemon.pokemon.url)
      .then(res => {
        if (res.data.sprites.other.dream_world.front_default) {
          fighterReducer({type: "name", payload: formState.name});
          fighterReducer({type: "species", payload: res.data.species.name});
          fighterReducer({type: "hp", payload: res.data.stats[0].base_stat});
          fighterReducer({type: "primarytype", payload: res.data.types[0].type.name});        
          fighterReducer({type: "gender", payload: formState.gender});
          fighterReducer({type: "image", payload: <img src={res.data.sprites.other.dream_world.front_default} alt="Your Pokemon" />});
          if(res.data.types[1]){
            fighterReducer({type: "secondarytype", payload: res.data.types[1].type.name});
          }
          else{
            fighterReducer({type: "secondarytype", payload: ""});
          }
        }
        else {
          //if the pokemon has no image, get another one
          fetchRandomPokemonOfType(data);
        }
      })
      .catch(error => console.log(error));
  }

  async function fetchRandomPokemon() {
    await axios.get("https://pokeapi.co/api/v2/pokemon/" + randomInteger(0, 600))
      .then(res => {
        opponentReducer({type: "species", payload: res.data.species.name});
        opponentReducer({type: "hp", payload: res.data.stats[0].base_stat});
        opponentReducer({type: "primarytype", payload: res.data.types[0].type.name});        
        opponentReducer({type: "gender", payload: randomGender()});
        opponentReducer({type: "image", payload: <img src={res.data.sprites.other.dream_world.front_default} alt="Your Opponent" />});
        if(res.data.types[1]){
          opponentReducer({type: "secondarytype", payload: res.data.types[1].type.name});
        }
      })
      .catch(error => console.log(error));
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
            submitHandler={handleSubmit}
            formReducer={fReducer}
            formState={formState}
          />
          <Pokemon
            pokemon={fighterState}
            line={translations[locale]['your-pokemon']}
            contrast="contrast(100%)"
            visibility={showOpponent ? "visible" : "hidden"}
          />
          <Pokemon
            pokemon={opponentState}
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
