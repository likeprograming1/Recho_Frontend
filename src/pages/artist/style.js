import styled from "styled-components";

const ProfileBox = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 80px 0;
    .artpf{
        .pftitle{
            margin: 30px 0px 50px 0px;
        }
        .pfname{
            margin-bottom: 20px;
            color: #4F4F4F;
        }
        .pfintro{
            margin-bottom: 20px;
            color: #4F4F4F;
        }
        .tagbutton{
            >button{
                background-color: #D0E6FF;
                width: 100px;
                height: 60px;
                border: none;
                margin-right: 30px;
                font-size: var(--font18);
                font-weight: bold;
                border-radius: 15px;
                margin-bottom: 20px;
                cursor: pointer;
            }
        }
    }
        .artwork{
            width: 1403px;
            height: auto;
            text-align: start;
            margin: 50px 0;
        }
        h1{
            margin: 50px 0;
        }
    .worklist{
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 34px;
      grid-row-gap: 23px;
      margin-bottom: 85px;
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
`

export default ProfileBox;