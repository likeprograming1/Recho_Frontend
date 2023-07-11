import {styled} from "styled-components";

const ProductSection = styled.section`
  position: fixed;
  .box {
    width: 700px;
    height: 700px;
    background-color: var(--White);
    border: 1px solid #000;
    border-radius: 10px;
    .proInfo{
      display: flex;
      flex-direction: column;
      .head,
      .pros{
        list-style: none;
      }
      .pros{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 50px;
        label{
          font-size: 20px;
          font-weight: 600;
        }
        input{
          padding: 10px;
          width: 350px;
          height: 40px;
          outline: none;
          border-radius: 10px;
          border: none;
          font-size: 18px;
        }
      }
      .head{
        margin: 0 auto;
        padding: 30px 0px;
        span{
          font-size: 24px;
          font-weight: 600;
        }
      }
      .Btn{
        list-style: none;
        margin: 0 auto;
        margin-top: 30px;
        button {
          width: 200px;
          height: 50px;
          background-color: var(--BtnColor);
          border-radius: 15px;
          border: none;
          font-size: var(--font36);
          font-weight: 600;
          color: var(--White);
          &:hover{
            cursor: pointer;
            background-color: #857cea;
          }
        }
      }
    }
  }
`;

export default ProductSection;