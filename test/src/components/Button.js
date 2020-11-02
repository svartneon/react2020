import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid grey;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  float: right;
  width: 100px
`

function Button(props) {

    return(
      <StyledButton>
        {props.text}
      </StyledButton>
    );
}

export default Button;