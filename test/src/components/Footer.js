import React, { useContext } from "react";
import styled from "styled-components";
import translations from "../locales/translations.js";
import LanguageContext from "./LanguageContext.js";

const P = styled.p``;

const StyledFooter = styled.footer`
   background-color: rgb(171, 236, 236);
   height: 100px;
   bottom: 0;
   ${P.selector} {
      text-align: center;
      opacity: 50%;
   }
`;

function Footer() {
   const locale = useContext(LanguageContext);

   return (
      <StyledFooter>
         <br />
         <br />
         <p>
            {translations[locale]["credit"]}&nbsp;
            <a href="https://www.vecteezy.com/free-vector/pokemon-type">
               Pokemon Type Vectors by Vecteezy
            </a>
            &nbsp;
         </p>
      </StyledFooter>
   );
}

export default Footer;
