import styled from "styled-components";

const More = styled.main`
  margin: 0 auto;
  padding: 83px 0px;
  position: relative;
  .tagsName {
    max-width: 1403px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 11px;
    .tag,
    .lasttag {
      border: none;
      background: none;
      font-size: 24px;
      font-weight: 600;
      margin-right: 10px;
    }
    .tag {
      color: var(--HeaFont);
    }
    .lasttag {
    }
  }
  .ordermade {
    max-width: 1403px;
    margin: 0 auto;
    .Imgbox {
      display: flex;
      justify-content: space-between;
      .white {
        width: 700px;
        height: 695px;
      }
      .MainImg {
        width: 700px;
        height: 695px;
      }
      .box {
        .orderlist {
          width: 456px;
          height: 608px;
          margin-bottom: 22px;
          border: 1px solid var(--HeaFoo);
          border-radius: 15px;
          background-color: var(--White);
          right: 55px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .listTitle {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 30px 0px;
            .title {
              font-size: var(--font24);
              font-weight: 600;
            }
          }
          .listContent {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 34px;
            .ContentLine {
              display: flex;
              justify-content: space-between;
              padding: 0px 20px;
              margin-bottom: 15px;
            }
          }
          .TotalPrice {
            display: flex;
            justify-content: end;
            margin-right: 21px;
            margin-bottom: 38px;
            font-size: var(--font34);
            font-weight: 600;
          }
          .listFooter {
            margin: 0px 20px;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .likeImg {
              width: 45px;
              height: 45px;
            }
            .orderBtn {
              width: 317px;
              height: 65px;
              border-radius: 15px;
              border: none;
              background-color: var(--BtnColor);
              color: var(--White);
              font-size: var(--font20);
              font-weight: 600;
              cursor: pointer;
            }
          }
        }
      }
      .artistpage {
        width: 456px;
        height: 66px;
        border-radius: 15px;
        border: none;
        background-color: #d0e6ff;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .MoreImg {
      width: 125px;
      height: 125px;
      margin-top: 16px;
      margin-right: 19px;
      margin-bottom: 38px;
    }
  }
  .tagHeaderBox {
    width: 100%;
    background-color: var(--HeaFoo);
    .tagHeader {
      max-width: 1403px;
      margin: 0 auto;
      height: 50px;
      display: flex;
      align-items: center;
      .select,
      .no-select {
        margin-right: 92px;
        color: var(--White);
        font-size: var(--font24);
        border: none;
        background: none;
        cursor: pointer;
      }
      .select {
        font-weight: 600;
      }
    }
  }
  .productImgBox {
    max-width: 1403px;
    margin: 0 auto;
    .product {
      width: 900px;
      height: 900px;
    }
  }
`;

export default More;