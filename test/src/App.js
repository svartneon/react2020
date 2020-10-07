import React from 'react';
import fire from './images/fire.svg';
import earth from './images/earth.svg';
import water from './images/water.svg';
import air from './images/air.svg';
import './App.css';


function Button(props) {

  const handleClick = () => props.onClickFunction(props.increment);

  return (
    <button className="Button" onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return (
    <div className="Message">{props.message}</div>
  );
}


function Form() {

  const [element, setElement] = React.useState('fire');
  const handleOptionChange = (value) => setElement(value);
  
  return (
    <form className="Form">
      <div className="Form-elements">
        <div className="Form-radio">
          <label>
            <img src={fire} alt="fire" />
            <br />
              fire
              <input
              type="radio"
              value="fire"
              checked={element === 'fire'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div className="Form-radio">
          <label>
            <img src={earth} alt="earth" />
            <br />
              earth
              <input
              type="radio"
              value="earth"
              checked={element === 'earth'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div className="Form-radio">
          <label>
            <img src={water} alt="water" />
            <br />
              water
              <input
              type="radio"
              value="water"
              checked={element === 'water'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div className="Form-radio">
          <label>
            <img src={air} alt="air" />
            <br />
              air
              <input
              type="radio"
              value="air"
              checked={element === 'air'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
      </div>

      {/* <Button onClickFunction={incrementCounter} increment={1} />
        <Button onClickFunction={incrementCounter} increment={5} />
        <Button onClickFunction={saveForm} increment={10} /> */}
    </form>
  );
}


function App() {



  return (
    <div className="Wrapper">
      <header className="Header">

      </header>
      <div className="Body">
        <Form />




        <div className="Result">
          <Display message={0} />
        </div>
      </div>
      <footer className="Footer">

      </footer>
    </div>
  );
}

export default App;
