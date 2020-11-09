import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
  background: white;
  border-radius: 3px;
  border: ${(props) => props.disabled ? '2px solid greyrey' : '2px solid grey'};
  color: ${(props) => props.disabled ? 'light grey' : 'black'};
  margin: 0 1em;
  padding: 0.25em 1em;
  float: right;
  width: 100px;
  visibility: ${(props) => props.visibility ? "visible" : "hidden"};
`

function Button(props) {
  if (!props.hidden) {
    return (
      <StyledButton disabled={props.disabled} onClick={props.onClick} visibility={props.visibility}>
        {props.text}
      </StyledButton>
    );
  }
  else {
    return "";
  }
}

export default Button;