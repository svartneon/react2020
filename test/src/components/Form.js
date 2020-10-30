import React, { useEffect, useRef } from 'react';
import RadioButton from './RadioButton.js';
import grass from './../images/grass.svg';
import normal from './../images/normal.svg';
import water from './../images/water.svg';
import electric from './../images/electric.svg';
import dark from './../images/dark.svg';
import dragon from './../images/dragon.svg';
import fire from './../images/fire.svg';
import psychic from './../images/psychic.svg';
import steel from './../images/steel.svg';
import fighting from './../images/fighting.svg';
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
        <RadioButton image={grass} text="Grass" value={12} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={dark} text="Dark" value={17} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={water} text="Water" value={11} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={electric} text="Electric" value={13} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={normal} text="Normal" value={1} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={dragon} text="Dragon" value={16} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={fire} text="Fire" value={10} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={psychic} text="Psychic" value={14} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={steel} text="Steel" value={9} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={fighting} text="Fighting" value={2} elementHandler={props.elementHandler} element={props.element} />
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