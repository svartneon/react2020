import React from 'react'

function Monster(props) {
    return (

        <div>
            {props.monster.image}
            <p>
                {props.monster.name}{props.monster.type}
                <br />
                <br />
                {props.monster.element}
                <br />
                {props.monster.gender}
                <br />
                {props.monster.damage}
            </p>
        </div>
    );
}

export default Monster;