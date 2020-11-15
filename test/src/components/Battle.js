import styled, { keyframes } from 'styled-components';
import React, { useContext, useState, useMemo } from 'react';
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
    const locale = useContext(LanguageContext);

    const [roundNumber, setRoundNumber] = useState(1);
    const [winner, setWinner] = useState("");
    const [visibility, setVisibility] = useState(true);
    const [roundVisibility, setRoundVisibility] = useState(false);
    const [fHit, setFHit] = useState(0);
    const [fMod, setFMod] = useState("normal-damage");
    const [oHit, setOHit] = useState(0);
    const [oMod, setOMod] = useState("normal-damage");

    let fighterHit = props.fighter.attack - props.opponent.defense + randomInteger(1, 10);
    let fighterMod = "normal-damage";

    let opponentHit = props.opponent.attack - props.fighter.defense + randomInteger(1, 10);
    let opponentMod = "normal-damage";



    const starter = randomStarter();

    const dmgMods = useMemo(() => {
        let doubleTo = [];
        let doubleFrom = [];
        let halfTo = [];
        let halfFrom = [];
        props.damageModifiers.forEach(element => {
            if (element.id === props.typeIdMap[props.fighter.primarytype]) {
                doubleTo.push.apply(doubleTo, element.doubleTo);
                doubleFrom.push.apply(doubleFrom, element.doubleFrom);
                halfTo.push.apply(halfTo, element.halfTo);
                halfFrom.push.apply(halfFrom, element.halfFrom);
            }
            if (element.id === props.typeIdMap[props.fighter.secondarytype]) {
                doubleTo.push.apply(doubleTo, element.doubleTo);
                doubleFrom.push.apply(doubleFrom, element.doubleFrom);
                halfTo.push.apply(halfTo, element.halfTo);
                halfFrom.push.apply(halfFrom, element.halfFrom);
            }
        });
        return { doubleTo: doubleTo, doubleFrom: doubleFrom, halfTo: halfTo, halfFrom: halfFrom };
    }, [props.fighter, props.damageModifiers, props.typeIdMap]);

    function calcFighterAttack() {
        if (calcDoubleTo()) {
            fighterHit = (props.fighter.attack * 2 - props.opponent.defense + randomInteger(1, 10));
            fighterMod = "double-damage";
        }
        if (calcHalfTo()) {
            fighterHit = Math.floor((props.fighter.attack - props.opponent.defense + randomInteger(1, 10)) / 2);
            fighterMod = "half-damage";
        }
        if (fighterHit < 0) {
            fighterHit = randomInteger(1, 10);
        }
        setFHit(fighterHit);
        setFMod(fighterMod);
    }

    function calcOpponentAttack() {
        if (calcDoubleFrom()) {
            opponentHit = (props.opponent.attack * 2 - props.fighter.defense + randomInteger(1, 10));
            fighterMod = "double-damage";
        }
        if (calcHalfFrom()) {
            opponentHit = Math.floor((props.opponent.attack - props.fighter.defense + randomInteger(1, 10)) / 2);
            opponentMod = "half-damage";
        }
        if (opponentHit < 0) {
            opponentHit = randomInteger(1, 10);
        }
        setOHit(opponentHit);
        setOMod(opponentMod);
    }

    function calcDoubleFrom() {
        let exist = false;
        dmgMods.doubleFrom.forEach((element) => {
            if ((props.opponent.primarytype || props.opponent.secondarytype) === element.name) {
                exist = true;
            }
        });
        return exist;
    }

    function calcHalfFrom() {
        let exist = false;
        dmgMods.halfFrom.forEach((element) => {
            if ((props.opponent.primarytype || props.opponent.secondarytype) === element.name) {
                exist = true;
            }
        });
        return exist;
    }

    function calcDoubleTo() {
        let exist = false;
        dmgMods.doubleTo.forEach((element) => {
            if ((props.opponent.primarytype || props.opponent.secondarytype) === element.name) {
                exist = true;
            }
        });
        return exist;
    }

    function calcHalfTo() {
        let exist = false;
        dmgMods.halfTo.forEach((element) => {
            if ((props.opponent.primarytype || props.opponent.primarytype) === element.name) {
                exist = true;
            }
        });
        return exist;
    }


    function hit() {
        setRoundNumber(roundNumber + 1);
        calcFighterAttack();
        calcOpponentAttack();

        if ("opponent" === starter) {

            setRoundVisibility(true);
            props.fighterReducer({ type: "hp", payload: props.fighter.hp - opponentHit });
            if ((props.fighter.hp - opponentHit) <= 0) {
                setWinner("looser");
                // setRoundVisibility(false);
                setVisibility(false);
                return;
            }
            props.opponentReducer({ type: "hp", payload: props.opponent.hp - fighterHit });
            if ((props.opponent.hp - fighterHit) <= 0) {
                setWinner("winner");
                //  setRoundVisibility(false);
                setVisibility(false);
            }
        }
        else {

            setRoundVisibility(true);
            props.opponentReducer({ type: "hp", payload: props.opponent.hp - fighterHit });
            if ((props.opponent.hp - fighterHit) <= 0) {
                setWinner("winner");
                // setRoundVisibility(false);
                setVisibility(false);
                return;
            }
            props.fighterReducer({ type: "hp", payload: props.fighter.hp - opponentHit });
            if ((props.fighter.hp - opponentHit) <= 0) {
                setWinner("looser");
                // setRoundVisibility(false);
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
                <Round fighterHit={fHit} opponenthit={oHit} visibility={roundVisibility} fighterMod={fMod} opponentMod={oMod} />
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