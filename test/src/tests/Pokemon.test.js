
import React from "react";
import { render, cleanup } from "@testing-library/react";
import LanguageContext from '../components/LanguageContext.js';
import Pokemon from '../components/Pokemon.js';

afterEach(cleanup);

test("pokemon", () => {
const poke = {  
    species: "pikachu",
    primarytype: "electric",
    gender: "female",
    hp: 5,
    attack: 6,
    defense: 7
};

  const { getByTestId } = render(
    <LanguageContext.Provider value="en">
    <div>
      <label>
      <Pokemon pokemon={poke}/>
      </label>
    </div>
    </LanguageContext.Provider>
  );

  const opponent = getByTestId('pokemon');
  expect(opponent.textContent).toBe('species: pikachutype(s): electric, gender: femalehp: 5attack: 6defense: 7');
});

test("languange context swe", () => {
  const poke = {  
      species: "pikachu",
      primarytype: "electric",
      gender: "female",
      hp: 5,
      attack: 6,
      defense: 7
  };
  
    const { getByTestId } = render(
      <LanguageContext.Provider value="sv">
      <div>
        <label>
        <Pokemon pokemon={poke}/>
        </label>
      </div>
      </LanguageContext.Provider>
    );
  
    const opponent = getByTestId('pokemon');
    expect(opponent.textContent).toBe("art: pikachutyp(er): elektrisk, kön: kvinnahp: 5attack: 6försvar: 7");
  });
