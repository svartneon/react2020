import React from 'react';

function RadioButton(props) {

  return (
    <div className="Form-radio">
      <label>
        <img src={props.image} alt={props.text} className="Form-radio-image"/>
        <br />
        {props.text}
        <input
          type="radio"
          value={props.value}
          checked={props.value == props.element}
          onChange={props.elementHandler}
        />
      </label>
    </div>
  );
}

export default RadioButton;