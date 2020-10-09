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
        <RadioButton image={fire} text="Fire" elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={earth} text="Earth" elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={water} text="Water" elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={air} text="Air" elementHandler={props.elementHandler} element={props.element} />
      </div>
      <br/>
      <br/>
      <br/>
      <div className="Form-gender">
        <select onChange={props.genderHandler} defaultValue={props.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="Form-name">
        <label>Monster Name</label>
        <br/>
        <input value={props.name} onChange={props.nameHandler}></input>
      </div>
      <br/>
      <br/>
      <br/>
      <button type="submit" className="Button">
        Generate
        </button>
    </form>

  );
}

export default Form;