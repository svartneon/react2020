import React from 'react';

function RadioButton(props) {
  return (
    <div className="Form-radio">
      <label>
        <img src={props.image} alt={props.text} />
        <br />
        {props.text}
        <input
          type="radio"
          value={props.text}
          checked={props.element === props.text}
          onChange={props.elementHandler}
        />
      </label>
    </div>
  );
}

export default RadioButton;