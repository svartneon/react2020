import React, { useContext } from 'react'
import styled from 'styled-components';
import translations from '../locales/translations.js';
import LanguageContext from './LanguageContext.js';


const StyledPokemon = styled.div`
    font-size: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    & > div {
        display: flex;
        flex-direction: column-reverse;
        height: 500px;  
        width: 450px;  
        background-color: rgb(197, 228, 218);
        border-radius: 300px;
        border:  rgb(197, 228, 218) solid 40px;
        align-items: center;
    }
    & > div > p {
        visibility: ${(props) => props.visibility}
    }
    & > div > img {
        width: 400px;
        height: 400px;
        filter: ${(props) => props.filter}
    }
`

function Pokemon(props) {

    const locale = useContext(LanguageContext);
    let comma;
    
    if("" === props.pokemon.secondarytype){
        comma = "";
    }
    else{
        comma = ",";
    }

    return (
        <StyledPokemon filter={props.contrast} visibility={props.visibility}>
            <h2>{props.line}</h2>
            <div>
                {props.pokemon.image}
                <p>
                    {props.pokemon.name}
                    <br />
                    {translations[locale]["species"]}: {props.pokemon.species}
                    <br />
                    {translations[locale]["types"]}: {translations[locale][props.pokemon.primarytype]}{comma} {translations[locale][props.pokemon.secondarytype]}
                    <br />
                    {translations[locale]["gender"]}: {translations[locale][props.pokemon.gender]}
                    <br />
                    hp: {props.pokemon.hp}
                </p>
            </div>
        </StyledPokemon>
    );
}

export default Pokemon;