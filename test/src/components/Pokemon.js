import React from 'react'

function Pokemon(props) {
    return (

        <div>
            {props.pokemon.image}
            <p>
                {props.pokemon.name}
                <br />
                {props.pokemon.species}
                <br />
                {props.pokemon.type}
                <br />
                {props.pokemon.gender}
                <br />
                {props.pokemon.hp}
            </p>
        </div>
    );
}

export default Pokemon;