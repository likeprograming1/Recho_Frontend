import styled from "styled-components";

const Chat = styled.section`
  position: fixed; 
  bottom: 680px;
  right: 550px;
  .Chatbox{
    width: 456px;
    height: 667px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #000;
    position: absolute;
    .head{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 51px;
      .btn {
        left: 10px;
        position: absolute;
        border: none;
        background: none;
      }
      span {
        font-size: var(--font22);
        font-weight: 600;
      }
    }
    .headbtns{
      display: flex;
      height: 56px;
      align-items: center;
      .backbtn{
        width: 15%;
        height: 100%;
        background: none;
        border: 1px solid #000;
        border-left: none;
        border-right: none;
        cursor: pointer;
      }
      .userbtn{
        width: 70%;
        height: 100%;
        display: flex;
        border: 1px solid #000;
        align-items: center;
        justify-content: center;
        background: none;
        cursor: pointer;
        .userImg{
          margin-right: 28px;
        }
        span{
          font-size: 20px;
          font-weight: 600;
        }
      }
      .etcbtn{
        width: 15%;
        height: 100%;
        background: none;
        border: 1px solid #000;
        border-left: none;
        border-right: none;  
        cursor: pointer;
      }
    }
    .chatbox {
      display: flex;
      align-items: center;
      justify-content: center;
      .chat{
        width: 434px;
        height: 459px;
      }
    }
    .footerbox{
      border-top : 1px solid #000;
      height: 97px;
      display: flex;
      align-items: center;
      justify-content: center;
      .plus{
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border: none;
        background-color: #D0E6FF;
        border-radius: 15px;
      }
      .Content{
        width: 300px;
        margin-right: 15px;
        height: 72px;
        padding: 15px;
        border-radius: 15px;
        background-color: #E4E4E4;
        border: 1px solid #000;
      } 
      .twitter{
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #D0E6FF;
        border-radius: 15px;
      }
    }
  }
`;

export default Chat;
