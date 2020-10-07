import React from 'react';
import RadioButton from './RadioButton.js';
import fire from './../images/fire.svg';
import earth from './../images/earth.svg';
import water from './../images/water.svg';
import air from './../images/air.svg';

function Form(props) {

    return (
      <form className="Form" onSubmit={props.submitHandler}>
        <div className="Form-elements">
            <RadioButton image={fire} text="fire" elementHandler={props.elementHandler} element={props.element}/>
            <RadioButton image={earth} text="earth" elementHandler={props.elementHandler} element={props.element}/>
            <RadioButton image={water} text="water" elementHandler={props.elementHandler} element={props.element}/>
            <RadioButton image={air} text="air" elementHandler={props.elementHandler} element={props.element}/>
        </div>
        <button type="submit" className="Button">
            Generate
        </button>
      </form>
  
    );
  }

  export default Form;