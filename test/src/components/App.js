import React, { useEffect, useState } from 'react';
import Form from './Form.js';
import Footer from './Footer.js';
import { monsters } from './monsters.js';
import './../styles/App.css';

function App() {

  const [element, setElement] = useState('Fire');
  const [result, setResult] = useState('');
  const [gender, setGender] = useState("Female");
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const handleElementChange = (event) => setElement(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);

  useEffect(() => {
    document.title = count + " monsters generated";
  }, [count]);

  const monsterList = monsters();
    

  function handleSubmit(event) {
    setCount(count+1);
    event.preventDefault();

    for (let key in monsterList) {
      if (element === monsterList[key].element && gender === monsterList[key].gender) {
        setResult(
          <div>
            {monsterList[key].image}
            <p>
              {name}{monsterList[key].type}
              <br />
              <br />
              damage type: {monsterList[key].element}
              <br />
              gender: {monsterList[key].gender}
              <br />
              damage: {Math.floor(Math.random() * (4 - 1) + 1)}-{Math.round(Math.random() * (10 - 4) + 4)}
            </p>
          </div>
        );
        break;
      }
      else {
        setResult(<p>Can't find a result</p>);
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
          {result}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
