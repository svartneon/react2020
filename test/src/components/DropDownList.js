import React from 'react'
import styled from 'styled-components';

export const StyledSelect = styled.select`
font-size: 20px;
background-color: #f9f9f9;
min-width: 180px;
padding: 3px 3px;
font-family: monospace;
`

function DropDownList(props) {

    let listOptions = [];

    for (let key in props.options) {
        listOptions.push(
            <option key={key} value={props.options[key]}>{props.options[key]}</option>
        );
    }

    return (
        <StyledSelect onChange={props.genderHandler} defaultValue={props.gender}>
            {listOptions}
        </StyledSelect>
    );
}

export default DropDownList;