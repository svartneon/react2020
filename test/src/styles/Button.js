import styled, { css } from 'styled-components';
import React from 'react';

function Button() {

    const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid grey;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
            props.primary &&
            css`
      background: white;
      color: black;
    `};
`
    return(
      <Button primary>
        Generate
      </Button>
    );
}

export default Button;