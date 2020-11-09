import styled from 'styled-components';
import React, {useContext} from 'react';
import translations from '../locales/translations.js';
import LanguageContext from './LanguageContext.js';

const StyledRound = styled.p`
    font-size: 15px;
    visibility: ${(props) => props.visibility ? "visible" : "hidden"};
`

function Round(props){
    const locale = useContext(LanguageContext);

    return (
    <StyledRound  visibility={props.visibility}>
        {translations[locale]["your-pokemon-hit"]} {props.fighterHit}!
        <br />
        <br />
        <br />
        {translations[locale]["opponent-hit"]} {props.opponenthit}!
    </StyledRound>
    );
}

export default Round;