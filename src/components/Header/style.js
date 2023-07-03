import { styled } from "styled-components";

const HeaderBox = styled.header`
  width: 100%;
  background-color: var(--HeaFoo);
  .box {
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1512px;
    .LogoImg{
      margin-left: 55px;
      cursor: pointer;
    }
    .nav-box{
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0px 55px;
      .nav-menu{
        display: flex;
        justify-content : end;
        .navSidebar{
          display: none;
          @media screen and (max-width: 919px){
            cursor: pointer;
            margin-left: 20px;
            display: block;
          }
        }
        .Sinput,
        .sign-navBtn,
        .navBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          height: 50px;
          font-size: var(--font16);
          font-weight: 600;
          color : var(--HeaFont);
          margin : 10px 27px;
          @media screen and (max-width: 1170px){
            margin : 10px 10px;  
          }
        }
        .sign-navBtn,
        .navBtn{
          @media screen and (max-width: 920px){
            display: none;
          }
        }
        .sign-navBtn{
          margin : 10px 0px 10px 27px;
          @media screen and (max-width: 1170px){
            margin : 10px 10px;  
          }
          @media screen and (max-width: 920px){
            display: none;
          }
        }
        .Sinput{
          position: relative;
          @media screen and (max-width: 580px){
              display: none;
            }
          .searchIn{
            @media screen and (max-width: 1170px){
              width: 200px;
              margin-right: 10px;
            }
            width: 400px;
            height: 50px; 
            border: 1px solid var(--HeaFont);
            background-color: var(--HeaFoo);
            color: var(--HeaFont);
            border-radius: 15px;
            outline: none;
            padding: 10px;
            font-size: var(--font16);
            margin-right: -10px;
          }
          .searchBtn{
            @media screen and (max-width: 1170px){
              margin-right: 17px;
            }
            cursor: pointer;
            position: absolute;
            margin-bottom: -3px;
            right: 0px;
            border: none;
            background-color: var(--HeaFoo);
          }
          
        }
        .solo-searchBtn{
          background-color: var(--HeaFoo);
          border: none;
          @media screen and (max-width: 580px){
            display: none;
          }
          .navSearch{
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: var(--font16);
            color : var(--HeaFont);
            margin : 10px 27px;
            cursor: pointer;
          }
        }
        
      }
      
    }
  }
  
  
`;

export default HeaderBox;