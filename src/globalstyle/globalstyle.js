import { createGlobalStyle } from "styled-components";

const variables = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{

    // font-color;
    --font : #1f2020;
    --HeaFont : #d9d9d9; 
    --HeaFoo : #1a1a1a; 
    --FooterContent : #848484;
    --logSignTitleFont : #455368;
    --SignUpCheck : #AFB9CA;
    --SignUpButton : #DDE5FD;
    
    // font-size
    --font9 : 9px;
    --font12 : 12px;
    --font14 : 14px;
    --font16 : 16px;
    --font20 : 20px;
    --font18 : 18px;
  }
`;

export default variables;