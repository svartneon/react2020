import React from 'react';
import fire_female from './../images/fire_female.svg';
import fire_male from './../images/fire_male.svg';
import earth_female from './../images/earth_female.svg';
import earth_male from './../images/earth_male.svg';
import water_female from './../images/water_female.svg';
import water_male from './../images/water_male.svg';
import air_female from './../images/air_female.svg';
import air_male from './../images/air_male.svg';

export function monsters() {
  return (
    [
      {
        "element": "Fire",
        "gender": "Female",
        "image": <img src={fire_female} alt="result" />,
        "type": " the viscious lava octopus."
      },
      {
        "element": "Fire",
        "gender": "Male",
        "image": <img src={fire_male} alt="result" />,
        "type": " the scolding fire dragon."
      },
      {
        "element": "Earth",
        "gender": "Female",
        "image": <img src={earth_female} alt="result" />,
        "type": " the sharptooth squirrel."
      },
      {
        "element": "Earth",
        "gender": "Male",
        "image": <img src={earth_male} alt="result" />,
        "type": " the stinky orch."
      },
      {
        "element": "Water",
        "gender": "Female",
        "image": <img src={water_female} alt="result" />,
        "type": " the traitorous mermaid."
      },
      {
        "element": "Water",
        "gender": "Male",
        "image": <img src={water_male} alt="result" />,
        "type": " bigfoot's baby brother."
      },
      {
        "element": "Air",
        "gender": "Female",
        "image": <img src={air_female} alt="result" />,
        "type": " the tempestuous pixie."
      },
      {
        "element": "Air",
        "gender": "Male",
        "image": <img src={air_male} alt="result" />,
        "type": " the judgemental angel."
      }
    ]);

}

