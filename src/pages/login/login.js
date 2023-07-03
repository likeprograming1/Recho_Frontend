import LoginBox from "./style"
import { useState } from "react";
import { Link } from "react-router-dom";
import Kakao from "../../Image/Footer/kakao.svg"
import Git from "../../Image/Footer/github.svg"
const Login = () => {

const [nameInputClick, setNameInputClick] = useState(false);
const [passwordInputClick, setPasswordInputClick] = useState(false);

  return (

    <LoginBox>
      <section className="title">
        <h1>로그인</h1>
        </section>
      <section className="namepsbar namebar">
        <h4>아이디</h4>
        <input className="nameinput" type="text" name="name"
      // 클릭될 때 작동
				onFocus={() => {
					setNameInputClick(true);
				}}
				// 클릭되어 있지 않을 때 작동input 이외의 영역이 클릭되었을 때)
				onBlur={() => {
					setNameInputClick(false);
				  }} placeholder={nameInputClick === true ? "" : "이메일 주소를 입력해주세요"}></input>
      </section>
      <section className="namepsbar psbar">
        <h4>비밀번호</h4>
        <input type="password" name="password" 
        onFocus={() => {
					setPasswordInputClick(true);
				}}
				onBlur={() => {
					setPasswordInputClick(false);
				}} placeholder={passwordInputClick === true ? "" : "비밀번호를 입력해주세요"} ></input>
      </section>
      <section className="signbutton">
        <button>로그인하기</button>
      </section>
      <section className="already">
        <nav className="oathimg">
          <img src={Kakao} alt="OathImg"></img>
          <img src={Git} alt="OathImg"></img>
        </nav>
        <nav className="linkcorr">
        <Link to="#" className="findac">
          아이디 / 비밀번호 찾기
        </Link>
        <Link to="/signup" className="gosignup">
          회원이 아니신가요?   <h5>  회원가입하기</h5>
        </Link>
        </nav>
      </section>
    </LoginBox>
  )
}

export default Login