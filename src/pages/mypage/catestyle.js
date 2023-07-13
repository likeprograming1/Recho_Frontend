import styled from "styled-components";

const Modal = styled.section`
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  .modals{
    width: 100%;
    height: 100vh;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    .modal{
      width: 456px;
      height: 400px;
      padding: 19px;
      border-radius: 10px;
      background-color: var(--White);
      display: flex;
      flex-direction: column;
      .back-btn{
        width : 36px;
        height : 36px;
        border-radius: 8px;
        background-color: #D0E6FF;
        border: 0.5px solid #000;
        cursor: pointer;
      }
      .header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: end;
        margin-top: 20px;
        margin-right: 29px;
        margin-bottom: 4px;
        img{
          width: 88px;
          height: 31px;
          margin-right: 90px;
        }
        .head {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 3px;
        }
      }
      .boxs {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        .box {
          width: 358px;
          height: 308px;
          padding: 20px;
          border-radius: 10px;
          /* background-color: #D0E6FF; */
          display: flex;
          justify-content: center;
          flex-direction: column;
          li{
            list-style: none;
            display: flex;
            justify-content: space-between;
            
          }
          li:nth-child(1){
            margin-top: 70px;
          }
          li:nth-child(4){
            margin-bottom: 80px;
          }
          .list {
            margin: 20px 0px;
          }
          .Iput {
            margin-bottom: 13px;
            .upload{
              display: none;
            }
            .file {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 23px;
              height: 23px;
              background-color: #7063EC;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
          }
        }
      }
      .total{
        margin-right: 49px;
        margin-bottom: 26px;
        display: flex;
        justify-content: end;
      }
      .footBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .mun{
          margin-right: 30px;
          span{
            font-size: 12px;
            font-weight: 600;
          }
        }
        .cashbtn{
          width: 81px;
          height: 33px;
          border: none;
          background-color: #7063EC;
          color: var(--White);
          font-weight: 600;
          font-size: var(--font14);
          border-radius: 10px;
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default Modal;