import React from 'react';
import logo from './logo.svg';
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
  return(
    <div className="Message">{props.message}</div>
  );
}

function App() {

  const [counter, setCounter] = React.useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);

  return (
    <div className="App">
      <br/>
      <br/>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <br/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <br/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <br/>
      <br/>
      <Display message={counter}/>
    </div>
  );
}

export default App;
