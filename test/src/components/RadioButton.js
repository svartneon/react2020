import React from 'react';
import styled from 'styled-components';

const StyledRadio = styled.div`
  font-size: 13px;
  max-width: 105px;  
  padding-top: 10px;
  padding-left: 5px;
`
const StyledImg = styled.img`
  width: 75px;
  height: 75px;
`

function RadioButton(props) {

  const type = ({ value }) => ({
    type: 'type',
    value,
  });

  return (
    <StyledRadio>
      <label>
        <StyledImg src={props.image} alt={props.text}/>
        <br />
        {props.text}
        <input
          type="radio"
          value={props.value}
          checked={props.value.toString() === props.formState.type}
          onChange={(radio) => props.formReducer(type({value:radio.target.value}))}
        />
      </label>
    </StyledRadio>
  );
}

export default RadioButton;