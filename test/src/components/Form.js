import React, { useEffect, useRef } from 'react';
import RadioButton from './RadioButton.js';
import DropDownList from './DropDownList.js';
import Button from './../styles/Button.js'

import normal from './../images/normal.svg';
import fighting from './../images/fighting.svg';
import flying from './../images/flying.svg';
import poison from './../images/poison.svg';
import ground from './../images/ground.svg';
import rock from './../images/rock.svg';
import bug from './../images/bug.svg';
import ghost from './../images/ghost.svg';
import steel from './../images/steel.svg';
import fire from './../images/fire.svg';
import water from './../images/water.svg';
import grass from './../images/grass.svg';
import electric from './../images/electric.svg';
import psychic from './../images/psychic.svg';
import ice from './../images/ice.svg';
import dragon from './../images/dragon.svg';
import dark from './../images/dark.svg';
import fairy from './../images/fairy.svg';

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
      <h2>Generate your Fighter</h2>
      <div className="Form-name">
        <label>Custom Name (optional)</label>
        <br />
        <input ref={nameInput} value={props.name} onChange={props.nameHandler}></input>
      </div>
      <br />
      <br />
      <br />
      <div className="Form-elements">
        <RadioButton image={normal} text="Normal" value={1} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={fighting} text="Fighting" value={2} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={flying} text="Flying" value={3} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={poison} text="Poison" value={4} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={ground} text="Ground" value={5} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={rock} text="Rock" value={6} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={bug} text="Bug" value={7} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={ghost} text="Ghost" value={8} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={steel} text="Steel" value={9} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={fire} text="Fire" value={10} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={water} text="Water" value={11} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={grass} text="Grass" value={12} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={electric} text="Electric" value={13} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={psychic} text="Psychic" value={14} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={ice} text="Ice" value={15} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={dragon} text="Dragon" value={16} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={dark} text="Dark" value={17} elementHandler={props.elementHandler} element={props.element} />
        <RadioButton image={fairy} text="Fairy" value={18} elementHandler={props.elementHandler} element={props.element} />
      </div>
      <br />
      <br />
      <br />
      <div className="Form-gender">
        <DropDownList
          options={["male", "female"]}
          gender={props.gender}
          genderHandler={props.genderHandler}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="Button">
        <Button onClick={reFocus} type="submit"/>
      </div>
    </form>

  );
}

export default Form;