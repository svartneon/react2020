import React, { useEffect, useState, useReducer, useMemo } from 'react';
import axios from 'axios';
import Form from './Form.js';
import Footer from './Footer.js';
import Pokemon from './Pokemon.js';
import translations from '../locales/translations.js';
import { randomInteger, randomGender } from '../helpers/randomizer.js';
import { formReducer, initialForm } from '../reducers/formReducer.js';
import { pokemonReducer, initialFighter, initialOpponent } from '../reducers/pokemonReducer.js';
import LanguageContext from './LanguageContext.js';
import Button from './Button.js';
import Battle from './Battle.js';
import StyledHeader from './StyledHeader.js';
import StyledWrapper from './StyledWrapper.js';
import StyledBody from './StyledBody.js';
import swe from './../images/swe.svg';
import eng from './../images/eng.svg';

function App() {

  const [showOpponent, setShowOpponent] = useState(0);
  const [battle, setBattle] = useState(0);
  const [locale, setLocale] = useState("en");

  const [formState, fReducer] = useReducer(formReducer, initialForm);
  const [fighterState, fighterReducer] = useReducer(pokemonReducer, initialFighter);
  const [opponentState, opponentReducer] = useReducer(pokemonReducer, initialOpponent);
  const [damageModifiers, setDamageModifiers] = useState([]);

  const typeIdMap = useMemo(() => {
    return({
      normal: 1,
      fighting: 2,
      flying: 3,
      poison: 4,
      ground: 5,
      rock: 6,
      bug: 7,
      ghost: 8,
      steel: 9,
      fire: 10,
      water: 11,
      grass: 12,
      electric: 13,
      psychic: 14,
      ice: 15,
      dragon: 16,
      dark: 17,
      fairy: 18
    })
  }, []);

  useEffect(() => {
    fetchRandomPokemon();
    for (let i = 1; i < 19; i++) {
      fetchDamageModifierList(i);
    }
  }, []);

  async function fetchDamageModifierList(type) {
    await axios.get("https://pokeapi.co/api/v2/type/" + type)
      .then(res => {
        return (setDamageModifiers(damageModifiers => [...damageModifiers, {
          id: res.data.id,
          doubleTo: res.data.damage_relations.double_damage_to,
          doubleFrom: res.data.damage_relations.double_damage_from,
          halfTo: res.data.damage_relations.half_damage_to,
          halfFrom: res.data.damage_relations.half_damage_from
        }])
        );
      })
      .catch(error => console.log(error));
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
          fighterReducer({ type: "name", payload: formState.name });
          fighterReducer({ type: "species", payload: res.data.species.name });
          fighterReducer({ type: "hp", payload: res.data.stats[0].base_stat });
          fighterReducer({ type: "attack", payload: res.data.stats[1].base_stat });
          fighterReducer({ type: "defense", payload: res.data.stats[2].base_stat });
          fighterReducer({ type: "primarytype", payload: res.data.types[0].type.name });
          fighterReducer({ type: "gender", payload: formState.gender });
          fighterReducer({ type: "image", payload: <img src={res.data.sprites.other.dream_world.front_default} alt="Your Pokemon" /> });
          if (res.data.types[1]) {
            fighterReducer({ type: "secondarytype", payload: res.data.types[1].type.name });
          }
          else {
            fighterReducer({ type: "secondarytype", payload: "" });
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
        opponentReducer({ type: "species", payload: res.data.species.name });
        opponentReducer({ type: "hp", payload: res.data.stats[0].base_stat });
        opponentReducer({ type: "attack", payload: res.data.stats[1].base_stat });
        opponentReducer({ type: "defense", payload: res.data.stats[2].base_stat });
        opponentReducer({ type: "primarytype", payload: res.data.types[0].type.name });
        opponentReducer({ type: "gender", payload: randomGender() });
        opponentReducer({ type: "image", payload: <img src={res.data.sprites.other.dream_world.front_default} alt="Your Opponent" /> });
        if (res.data.types[1]) {
          opponentReducer({ type: "secondarytype", payload: res.data.types[1].type.name });
        }
      })
      .catch(error => console.log(error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchAllPokemonOfType(formState.type);
    setShowOpponent(1);
  }

  function startBattle() {
    setBattle(1);
  }

  return (
    <LanguageContext.Provider value={locale}>
      <StyledWrapper>
        <StyledHeader className="Header">
          <h1 data-testid="language">{translations[locale]['pokemon-battle']}</h1>
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
            disabled={showOpponent}
            hidden={battle}
            typeIdMap={typeIdMap}
          />
          <Pokemon
            pokemon={fighterState}
            line={translations[locale]['your-pokemon']}
            contrast="contrast(100%)"
            visibility={showOpponent ? "visible" : "hidden"}
          />
          <Battle
            hidden={!battle}
            fighter={fighterState}
            fighterReducer={fighterReducer}
            opponent={opponentState}
            opponentReducer={opponentReducer}
            damageModifiers={damageModifiers}
            typeIdMap={typeIdMap}
          />
          <Button
            text={translations[locale]['start-battle']}
            disabled={!showOpponent}
            onClick={startBattle}
            visibility={showOpponent}
            hidden={battle}
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
