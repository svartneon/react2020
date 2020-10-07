import React from 'react';
import Form from './Form.js';
import './../styles/App.css';

function Display(props) {
  return (
    <div className="Message">{props.message}</div>
  );
}


function App() {

  const [element, setElement] = React.useState('fire');
  const [result, setResult] = React.useState('');
  const handleOptionChange = (event) => setElement(event.target.value);

  function handleSubmit(event){ 
    event.preventDefault();
    setResult(element);
  }

  return (
    <div className="Wrapper">
      <header className="Header">

      </header>
      <div className="Body">
        <Form element={element} elementHandler={handleOptionChange} submitHandler={handleSubmit}/>

        <div className="Result">
         <Display message={result} />
        </div>
      </div>
      <footer className="Footer">

      </footer>
    </div>
  );
}

export default App;
