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
  #buttonDiv {
    padding-right: 30px;
  }
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
    if (!props.hidden) {
      nameInput.current.focus();
    }
  }, [props.hidden]);

  function reFocus() {
    if (!props.hidden) {
      nameInput.current.focus();
    }
  }

  const name = ({ value }) => ({
    type: 'name',
    value,
  });


  if (!props.hidden) {
    return (
      <StyledForm className="Form" onSubmit={props.submitHandler}>
        <h2>{translations[locale]['generate-your-pokemon']}</h2>
        <div>
          <label>
            {translations[locale]['custom-name']}
          </label>
          <br />
          <StyledInput ref={nameInput} value={props.formState.name} onChange={(text) => props.formReducer(name({ value: text.target.value }))} />
        </div>
        <br />
        <br />
        <StyledDivTypes>
          <RadioButton image={normal} text={translations[locale]['normal']} value={props.typeIdMap["normal"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={fighting} text={translations[locale]['fighting']} value={props.typeIdMap["fighting"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={flying} text={translations[locale]['flying']} value={props.typeIdMap["flying"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={poison} text={translations[locale]['poison']} value={props.typeIdMap["poison"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={ground} text={translations[locale]['ground']} value={props.typeIdMap["ground"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={rock} text={translations[locale]['rock']} value={props.typeIdMap["rock"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={bug} text={translations[locale]['bug']} value={props.typeIdMap["bug"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={ghost} text={translations[locale]['ghost']} value={props.typeIdMap["ghost"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={steel} text={translations[locale]['steel']} value={props.typeIdMap["steel"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={fire} text={translations[locale]['fire']} value={props.typeIdMap["fire"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={water} text={translations[locale]['water']} value={props.typeIdMap["water"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={grass} text={translations[locale]['grass']} value={props.typeIdMap["grass"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={electric} text={translations[locale]['electric']} value={props.typeIdMap["electric"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={psychic} text={translations[locale]['psychic']} value={props.typeIdMap["psychic"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={ice} text={translations[locale]['ice']} value={props.typeIdMap["ice"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={dragon} text={translations[locale]['dragon']} value={props.typeIdMap["dragon"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={dark} text={translations[locale]['dark']} value={props.typeIdMap["dark"]} formReducer={props.formReducer} formState={props.formState} />
          <RadioButton image={fairy} text={translations[locale]['fairy']} value={props.typeIdMap["fairy"]} formReducer={props.formReducer} formState={props.formState} />
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
        <div id="buttonDiv">
          <Button onClick={reFocus} type="submit" text={translations[locale]['generate']} disabled={props.disabled} visibility={true}/>
        </div>
      </StyledForm>

    );
  }
  else {
    return "";
  }
}

export default Form;