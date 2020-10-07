import React from 'react';
import fire from './../images/fire.svg';
import earth from './../images/earth.svg';
import water from './../images/water.svg';
import air from './../images/air.svg';

function Form(props) {

    function Button(props) {

       const handleClick = () => props.onClickFunction();
      
        return (
          <button className="Button" onClick={handleClick}>
            Submit
          </button>
        );
      }
  
  
    return (
      <form className="Form">
        <div className="Form-elements">
          <div className="Form-radio">
            <label>
              <img src={fire} alt="fire" />
              <br />
                fire
                <input
                type="radio"
                value="fire"
                checked={props.element === 'fire'}
                onChange={props.elementHandler}
              />
            </label>
          </div>
          <div className="Form-radio">
            <label>
              <img src={earth} alt="earth" />
              <br />
                earth
                <input
                type="radio"
                value="earth"
                checked={props.element === 'earth'}
                onChange={props.elementHandler}
              />
            </label>
          </div>
          <div className="Form-radio">
            <label>
              <img src={water} alt="water" />
              <br />
                water
                <input
                type="radio"
                value="water"
                checked={props.element === 'water'}
                onChange={props.elementHandler}
              />
            </label>
          </div>
          <div className="Form-radio">
            <label>
              <img src={air} alt="air" />
              <br />
                air
                <input
                type="radio"
                value="air"
                checked={props.element === 'air'}
                onChange={props.elementHandler}
              />
            </label>
          </div>
        </div>

        <Button onClickFunction={props.submitHandler}/>
  
        {/* <Button onClickFunction={incrementCounter} increment={1} />
          <Button onClickFunction={incrementCounter} increment={5} />
          <Button onClickFunction={saveForm} increment={10} /> */}
      </form>
  
    );
  }

  export default Form;