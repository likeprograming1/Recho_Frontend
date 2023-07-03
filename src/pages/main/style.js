import { styled } from "styled-components";

const MainBox = styled.main`
  margin: 0 auto;
  max-width: 1403px;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  align-items: center;
  .realTime{
    margin-top: 47px;
    width: 100%;
    h2{
      margin-bottom: 10px;
    }
    .BestBox {
      width: 100%;
      display: flex;
      .Best{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-right: 41px;
        border: none;
        background-color: var(--White);
        cursor: pointer;
        img{
          width: 200px;
          height: 223px;
        }
        .title{
          font-size: var(--font14);
          margin-top: 14.4px;
        }
        .content{
          font-size: var(--font12);
          color : var(--Gray);
        }
        .price{
          font-size: var(--font18);
          margin-top: 4px;
          margin-bottom: 14px;
        }
      }
      .Best:hover{
        background-color: #eee;
      }
    }
  }
  
  .tags{
    width: 100%;
    margin-top: 120px;
    .tag{
      border: none;
      background: none;
      margin-right: 40px;
      cursor: pointer;
      .select{
        color: var(--HeaFoo);
      }
      .non-select {
        color: var(--Nosel);
      }
    }
    .boxs{
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 34px;
      grid-row-gap: 23px;
      margin-bottom: 85px;
      @media screen and (max-width : 1450px){
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width : 1050px){
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width : 720px){
        grid-template-columns: repeat(1, 1fr);
      }
      .Box{
        width : 325px;
        border: 1px solid #ccc;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        .tagImgBox{
          display: flex;
          flex-direction: column;
          border: none;
          background-color: var(--White);
          .title{
            margin: 16px 0px 10px 11px;
            font-size : var(--font14);
          }
          .content {
            font-size : var(--font14);
            color : var(--FooterContent);
            margin : 0px 0px 25px 11px;
          }
          .price{
            font-size : var(--font20);
            margin: 0px 0px 14px 11px;
          }
          .tagImg{
            width: 323px;
            height: 323px;
          }
        }
        .tagImgBox:hover{
          cursor: pointer;
          background-color: #eee;
        }
        .likeBox{
          display: flex;
          align-items: center;
          height : 56px;
          border-top: 1px solid #ccc;
          .btn {
            border: none;
            background: none;
            cursor: pointer;
            margin-left: 5px;
          }
          p{
            display: flex; 
            justify-content: center;
            font-size: var(--font14);
            color: var(--FooterContent);
          }
        }
      }
      
    }
    
  }
`;

export default MainBox;