import React from 'react'

function DropDownList(props) {

    let listOptions = [];

    for (let key in props.options) {
        listOptions.push(
            <option key={key} value={props.options[key]}>{props.options[key]}</option>
        );
    }

    return (
        <select onChange={props.genderHandler} defaultValue={props.gender}>
            {listOptions}
        </select>
    );
}

export default DropDownList;