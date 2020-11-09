import styled, { keyframes } from 'styled-components';
import React, { useContext, useState } from 'react';
import { randomStarter, randomInteger } from '../helpers/randomizer.js';
import translations from '../locales/translations.js';
import LanguageContext from './LanguageContext.js';
import Button from './Button.js';
import Round from './Round.js';

const hideAfter5s = keyframes`
    from {
        visibility: visible;
    }

    to {
        visibility: hidden;

    }
`

const StyledBattle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 25px;
    height: 500px;  
    width: 450px;  
    align-items: center;
  & > h2 {
      animation: ${hideAfter5s} 0s ease-in 2s forwards;
  }
  & > span{
    height: 400px;
    font-size: 15px;
  }
`
function Battle(props) {
    const [roundNumber, setRoundNumber] = useState(1);
    const [fighterHit, setFighterHit] = useState(0);
    const [opponentHit, setOpponentHit] = useState(0);
    const [winner, setWinner] = useState("");
    const [visibility, setVisibility] = useState(true);
    const [roundVisibility, setRoundVisibility] = useState(false);

    const locale = useContext(LanguageContext);

    const opponentHp = props.opponent.hp;
    const fighterHp = props.fighter.hp;
    const starter = randomStarter();

    function hit() {

        setRoundNumber(roundNumber + 1);
        setFighterHit(randomInteger(1, 10));
        setOpponentHit(randomInteger(1, 10));


        if ("opponent" === starter) {

            setRoundVisibility(true);
            props.fighterReducer({ type: "hp", payload: fighterHp - opponentHit });
            if ((fighterHp - opponentHit) <= 0) {
                setWinner("looser");
                setRoundVisibility(false);
                setVisibility(false);
                return;
            }
            props.opponentReducer({ type: "hp", payload: opponentHp - fighterHit });
            if ((opponentHp - fighterHit) <= 0) {
                setWinner("winner");
                setRoundVisibility(false);
                setVisibility(false);
            }
        }
        else {

            setRoundVisibility(true);
            props.opponentReducer({ type: "hp", payload: opponentHp - fighterHit });
            if ((opponentHp - fighterHit) <= 0) {
                setWinner("winner");
                setRoundVisibility(false);
                setVisibility(false);
                return;
            }
            props.fighterReducer({ type: "hp", payload: fighterHp - opponentHit });
            if ((fighterHp - opponentHit) <= 0) {
                setWinner("looser");
                setRoundVisibility(false);
                setVisibility(false);
            }
        }
    }

    function refreshPage() {
        window.location.reload();
    }


    if (!props.hidden) {
        return (
            <StyledBattle visibility={visibility}>
                <h2>{translations[locale][starter]} Starts!</h2>
                <Round fighterHit={fighterHit} opponenthit={opponentHit} visibility={roundVisibility} />
                {translations[locale][winner]}
                <br />
                <br />
                <Button onClick={hit} visibility={visibility} text={translations[locale]["round"] + " " + roundNumber} />
                <br />
                <br />
                <br />
                <br />
                <Button visibility={!visibility} text={translations[locale]["play-again"]} onClick={refreshPage} />
            </StyledBattle>
        );
    }
    else {
        return "";
    }
}

export default Battle;