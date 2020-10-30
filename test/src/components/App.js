import React, { useEffect, useState } from 'react';
import axios from "axios";
import Form from './Form.js';
import Footer from './Footer.js';
import Monster from './Monster.js';
import { monsters } from '../data/monsters.js';
import './../styles/App.css';

function App() {

  const [element, setElement] = useState(12);
  const [gender, setGender] = useState("Female");
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [ex, setEx] = useState("");
  const [opponent, setOpponent] = useState("");
  const [monster, setMonster] = useState({ name: "", image: "", element: "", gender: "", type: "", damage: "" });
  const handleElementChange = (event) => setElement(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);

  useEffect(() => {
    document.title = count + " monsters generated";
  }, [count]);

  //const monsterList = monsters();

  function handleSubmit(event) {
    event.preventDefault();
    setCount(count + 1);
    fetchPokemon(element);
    // for (let key in monsterList) {
    //   if (element === monsterList[key].element && gender === monsterList[key].gender) {
    //     setMonster({
    //       ...monster,
    //       name: name,
    //       image: monsterList[key].image,
    //       element: "element: " + monsterList[key].element,
    //       gender: "gender: " + monsterList[key].gender,
    //       type: monsterList[key].type,
    //       damage: "damage:" + Math.floor(Math.random() * (4 - 1) + 1) + "-" + Math.round(Math.random() * (10 - 4) + 4)
    //     }
    //     );
    //     break;
    //   }
    //   else {
    //     setMonster({ name: "", image: "Can't find monster", element: "", gender: "", type: "", damage: "" });
    //   }
    // }
  }


  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/type/3")
      .then(res => {
        const numb = Math.floor(Math.random() * (res.data.pokemon.length - 1));

        const pokemon = res.data.pokemon[numb];
        console.log(res.data.pokemon[numb]);

        axios.get(pokemon.pokemon.url)
          .then(res => {
            if (res.data.sprites.other.dream_world.front_default)
              setEx(res.data.sprites.other.dream_world.front_default);
            else
              setEx("")
          })
      })
  }

  return (
    <div className="Wrapper">
      <header className="Header">
        Monster Generator
      </header>
      <div className="Body">
        <Form
          element={element} elementHandler={handleElementChange}
          submitHandler={handleSubmit}
          gender={gender} genderHandler={handleGenderChange}
          name={name} nameHandler={handleNameChange}
        />
        <div className="Result">
          <div>
          <img src={ex} alt="no artwork available" id="bw" />
          </div>
          <Monster monster={monster} />
        </div>
        <div className="Opponent">
          <img src={opponent} alt="no artwork available" id="opponent" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
