import { createGlobalStyle } from "styled-components";

const variables = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .App {
    background-color: var(--White);
  }
  :root{

    // font-color;
    --font : #1f2020;
    --HeaFont : #d9d9d9; 
    --HeaFoo : #1a1a1a; 
    --FooterContent : #848484;
    --White : #F8F8F8;
    --Gray : #464646;
    --Nosel : #a0a0a0;
    
    // font-size
    --font12 : 12px;
    --font14 : 14px;
    --font16 : 16px;
    --font18 : 18px;
    --font20 : 20px;

  }
`;

export default variables;