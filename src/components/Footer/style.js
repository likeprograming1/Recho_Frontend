import styled from "styled-components";

const FooterBox = styled.footer`
  width: 100%;
  border-top: 1px solid var(--FooterContent);
  background-color: var(--White);
  .box {
    max-width: 1512px;
    margin: 0 auto;
    width: 100%;
    height: 260px;
    padding: 0px 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 710px){
      padding: 0px;
    }
    .footer-head{
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      @media screen and (max-width: 350px) {
        display: none;
      }
      @media screen and (max-width: 710px){
        margin-top: 40px;
      }
      .footer-names {
        text-decoration: none;
        color : var(--font);
        font-weight: 600;
        margin: 0px 50px 0px 0px;
        font-size: var(--font14);
        @media screen and (max-width: 710px){
          margin: 0px 20px 0px 0px;
        }
        @media screen and (max-width: 450px){
          margin: 0px 8px 0px 0px;
        }
      }
    }
    .footer-boxs{
      .footer-box{
        display: flex;
        flex-direction: column;
        list-style: none;
        li{
          display: flex;
          margin-bottom: 10px;
          .title {
            width: 80px;
            font-weight: 600;
            font-size : var(--font14);
            margin-right: 18px;
          }
          .content {
            font-size : var(--font14);
            color : var(--FooterContent);
          }
        }
        .lastli{
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          @media screen and (max-width: 1050px){
            display: flex;
            flex-direction: column;
            justify-content: none;
          }
          .Foobtm{
            width: 100%;
            display: flex;
            flex-direction: column;
            @media screen and (max-width: 350px) {
              display: none;
            }
            small {
              color : var(--FooterContent);
              margin-bottom: 3px;
            }
          }
          .lastImg{
            width: 100%;
            display: flex;
            justify-content: end;
            @media screen and (max-width: 1050px){
              display: flex;
              justify-content: center;
              margin-top: 10px;
            }
            img{
              width: 40px;
              height: 40px; 
              margin-right: 39px;
              @media screen and (max-width: 350px) {
                width: 40px;
                height: 40px;
                margin-right: 10px;
              }
            }
            .lastchild{
              margin-right: 0px;
            }
          }
        } 
        
      }
    }
    .foobtm{
      display: flex;
      margin-top: 20px;
    }
  }
  
`;

export default FooterBox;