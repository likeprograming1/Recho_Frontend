import { styled } from "styled-components";

export const Modal = styled.div`
  width: 600px;
  height: 400px;
  background-color: var(--White);
  border: 1px solid #000;
  border-radius: 15px;
  position: fixed;
  display: flex;
  flex-direction: column;

`;

export const ModalHead = styled.div`
  position: relative;
  .close {
    position: absolute;
    right: 10px;
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
  }
  span {
    font-size: 24px;
    padding: 20px 0px;
  }
`;
export const NftBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 200px;
    height: 200px;
  }
`;