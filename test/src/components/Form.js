import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import translations from '../locales/translations.js';
import LanguageContext from './LanguageContext.js';
import RadioButton from './RadioButton.js';
import DropDownList from './DropDownList.js';
import Button from './Button.js'

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


const StyledForm = styled.form`
  border:  rgb(197, 228, 218) solid;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(197, 228, 218);
  border-radius: 100px;
`
const StyledInput = styled.input`
  min-width: 180px;
  line-height: 25px;
`
const StyledDivTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 510px;
`

function Form(props) {

  const locale = useContext(LanguageContext)
  const nameInput = useRef(null);

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  function reFocus() {
    nameInput.current.focus();
  }

  const name = ({ value }) => ({
    type: 'name',
    value,
  });
  return (    
    <StyledForm className="Form" onSubmit={props.submitHandler}>
      <h2>{translations[locale]['generate-your-pokemon']}</h2>
      <div>
        <label>
          {translations[locale]['custom-name']}
        </label>
        <br />
        <StyledInput ref={nameInput} value={props.formState.name} onChange={(text) => props.formReducer(name({value:text.target.value}))} />
      </div>
      <br />
      <br />
      <br />
      <StyledDivTypes>
        <RadioButton image={normal} text={translations[locale]['normal']} value={1} formReducer={props.formReducer} formState={props.formState}/>
        <RadioButton image={fighting} text={translations[locale]['fighting']} value={2} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={flying} text={translations[locale]['flying']} value={3} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={poison} text={translations[locale]['poison']} value={4} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={ground} text={translations[locale]['ground']} value={5} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={rock} text={translations[locale]['rock']} value={6} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={bug} text={translations[locale]['bug']} value={7} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={ghost} text={translations[locale]['ghost']} value={8} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={steel} text={translations[locale]['steel']} value={9} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={fire} text={translations[locale]['fire']} value={10} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={water} text={translations[locale]['water']} value={11} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={grass} text={translations[locale]['grass']} value={12} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={electric} text={translations[locale]['electric']} value={13} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={psychic} text={translations[locale]['psychic']} value={14} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={ice} text={translations[locale]['ice']} value={15} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={dragon} text={translations[locale]['dragon']} value={16} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={dark} text={translations[locale]['dark']} value={17} formReducer={props.formReducer} formState={props.formState} />
        <RadioButton image={fairy} text={translations[locale]['fairy']} value={18} formReducer={props.formReducer} formState={props.formState} />
      </StyledDivTypes>
      <br />
      <br />
      <br />
      <div>
        <DropDownList
          options={[
            translations[locale]['male'],
            translations[locale]['female']
          ]}
          formReducer={props.formReducer} 
          formState={props.formState}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="Button">
        <Button onClick={reFocus} type="submit" text={translations[locale]['generate']} />
      </div>
    </StyledForm>

  );
}

export default Form;