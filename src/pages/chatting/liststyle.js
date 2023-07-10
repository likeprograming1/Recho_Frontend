import styled from "styled-components";

const ListBox = styled.section`
  position: fixed; 
  width: 456px;
  height: 667px;
  bottom: 13px;
  right: 94px;
  background-color: var(--White);
  border-radius: 15px;
  border: 1px solid #000;
  .Chatbox{
    width: 456px;
    height: 667px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #000;
    position: absolute;
    overflow: hidden;
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
      .userbtn{
        width: 85%;
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
    .ContentBox{
      .Contents{
        display: flex;
        list-style: none;
        .artist,
        .today,
        .day{
          display: flex;
          align-items: center;
          justify-content: center;
          padding: auto;
          border: 1px solid #000;
          border-top: none;
          height: 32px;
        }
        .artist{
          width: 20%;
          border-left: none;
          border-right: none;
        }
        .today{
          width: 65%;
        }
        .day{
          width: 15%;
          border-left: none;
          border-right: none;
        }

        .artists,
        .todays,
        .days{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
          border: 1px solid #000;
          border-top: none;
        }

        .artists{
          flex-direction: column;
          list-style: none;
          width: 20%;
          border-left: none;
          border-right: none;
          .artistImg{
            width: 50px;
            height: 50px;
          }
          .artistname{
            font-size: 7px;
          }
        }
        .todays{
          width: 65%;
        }
        .days{
          border-left: none;
          border-right: none;
          width: 15%;
        }
      }
    }
  }
`;

export default ListBox;
