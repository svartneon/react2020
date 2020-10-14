import React, { useEffect, useState } from 'react';
import Form from './Form.js';
import Footer from './Footer.js';
import Monster from './Monster.js';
import { monsters } from './monsters.js';
import './../styles/App.css';

function App() {

  const [element, setElement] = useState('Fire');
  const [gender, setGender] = useState("Female");
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [monster, setMonster] = useState({ name: "", image: "", element: "", gender: "", type: "", damage: "" });
  const handleElementChange = (event) => setElement(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);

  useEffect(() => {
    document.title = count + " monsters generated";
  }, [count]);

  const monsterList = monsters();


  function handleSubmit(event) {
    event.preventDefault();
    setCount(count + 1);

    for (let key in monsterList) {
      if (element === monsterList[key].element && gender === monsterList[key].gender) {
        setMonster({
          ...monster,
          name: name,
          image: monsterList[key].image,
          element: "element: " + monsterList[key].element,
          gender: "gender: " + monsterList[key].gender,
          type: monsterList[key].type,
          damage: "damage:" + Math.floor(Math.random() * (4 - 1) + 1) + "-" + Math.round(Math.random() * (10 - 4) + 4)
        }
        );
        break;
      }
      else {
        setMonster({ name: "", image: "Can't find monster", element: "", gender: "", type: "", damage: "" });
      }
    }
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
          <Monster monster={monster} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
