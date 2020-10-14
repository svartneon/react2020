import React, { useEffect, useRef } from 'react';
import RadioButton from './RadioButton.js';
import fire from './../images/fire.svg';
import earth from './../images/earth.svg';
import water from './../images/water.svg';
import air from './../images/air.svg';
import DropDownList from './DropDownList.js';

function Form(props) {

  const nameInput = useRef(null);

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  function reFocus() {
    nameInput.current.focus();
  }

  return (
    <form className="Form" onSubmit={props.submitHandler}>
      <div className="Form-name">
        <label>Monster Name (optional)</label>
        <br />
        <input ref={nameInput} value={props.name} onChange={props.nameHandler}></input>
      </div>
      <br />
      <br />
      <br />
      <div className="Form-elements">
        <RadioButton image={fire} text="Fire" elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={earth} text="Earth" elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={water} text="Water" elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={air} text="Air" elementHandler={props.elementHandler} element={props.element} />
      </div>
      <br />
      <br />
      <br />
      <div className="Form-gender">
        <DropDownList
          options={["Male", "Female"]}
          gender={props.gender}
          genderHandler={props.genderHandler}
        />
      </div>
      <br />
      <br />
      <br />
      <button onClick={reFocus} type="submit" className="Button">
        Generate
      </button>
    </form>

  );
}

export default Form;