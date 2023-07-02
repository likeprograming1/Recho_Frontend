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

    // font-size
    --font14 : 14px;
    --font16 : 16px;
    --font20 : 20px;

  }
`;

export default variables;