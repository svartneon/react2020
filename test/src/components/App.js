import React from 'react';
import Form from './Form.js';
import './../styles/App.css';
import fire_female from './../images/fire_female.svg';
import fire_male from './../images/fire_male.svg';
import earth_female from './../images/earth_female.svg';
import earth_male from './../images/earth_male.svg';
import water_female from './../images/water_female.svg';
import water_male from './../images/water_male.svg';
import air_female from './../images/air_female.svg';
import air_male from './../images/air_male.svg';

function App() {

  const [element, setElement] = React.useState('Fire');
  const [result, setResult] = React.useState('');
  const [gender, setGender] = React.useState("Female");
  const [name, setName] = React.useState("Nameless");
  const handleElementChange = (event) => setElement(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);

  React.useEffect(() => {
    document.title = `${element} Monster`;
  });

  function handleSubmit(event) {
    event.preventDefault();

    for (const key in monsters) {
      if (element === monsters[key].element && gender === monsters[key].gender) {
        setResult(
          <div>
            {monsters[key].image}
            <p>
              {name}{monsters[key].type}
              <br />
              <br />
              damage type: {monsters[key].element}
              <br />
              gender: {monsters[key].gender}
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

  const monsters = [
    {
      "element": "Fire",
      "gender": "Female",
      "image": <img src={fire_female} alt="result" />,
      "type": " the viscious lava octopus."
    },
    {
      "element": "Fire",
      "gender": "Male",
      "image": <img src={fire_male} alt="result" />,
      "type": " the scolding fire dragon."
    },
    {
      "element": "Earth",
      "gender": "Female",
      "image": <img src={earth_female} alt="result" />,
      "type": " the sharptooth squirrel."
    },
    {
      "element": "Earth",
      "gender": "Male",
      "image": <img src={earth_male} alt="result" />,
      "type": " the stinky orch."
    },
    {
      "element": "Water",
      "gender": "Female",
      "image": <img src={water_female} alt="result" />,
      "type": " the traitorous mermaid."
    },
    {
      "element": "Water",
      "gender": "Male",
      "image": <img src={water_male} alt="result" />,
      "type": " bigfoot's baby brother."
    },
    {
      "element": "Air",
      "gender": "Female",
      "image": <img src={air_female} alt="result" />,
      "type": " the tempestuous pixie."
    },
    {
      "element": "Air",
      "gender": "Male",
      "image": <img src={air_male} alt="result" />,
      "type": " the judgemental angel."
    }
  ];

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
      <footer className="Footer">
        Images by  
        <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=147719">OpenClipart-Vectors</a>,
        <a href="https://pixabay.com/users/endresz-3286579/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1663243">Mária Endrész</a>,
        <a href="https://pixabay.com/users/pandannaimagen-10193585/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4378680">Pandanna Imagen</a>,
        <a href="https://pixabay.com/users/gorkhs-268986/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3757569">Gorkhs</a> and 
        <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=40860">Clker-Free-Vector-Images</a>
        from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=147719">Pixabay</a>
      </footer>
    </div>
  );
}

export default App;
