import { styled } from "styled-components";


export const Modals = styled.main`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;

`;

export const ModalBackdrops = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalBtns = styled.button`
  background-color: #7063EC;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ExitBtns = styled(ModalBtns) `
background-color : #ffffff;
border-radius: 10px;
text-decoration: none;
margin: 40px;
padding: 5px 10px;
width: 40px;
height: 40px;
display : flex;
justify-content : center;
align-items : center;
color: #111111;
font-weight: bold;
position: absolute;
top: -20px;
right: -10px;
`;

export const ModalViews = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 480px;
  height: 250px;
  background-color: #7063EC;
    >div.desc {
      margin: 70px;
      font-size: 20px;
      color: #ffffff;
      font-weight: 700;
    }
    >:nth-child(3){
      width: 220px;
      height: 50px;
      border-radius: 10px;
      border: none;
      font-weight: bold;
      cursor: pointer;
    }
`;