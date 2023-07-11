import React from "react";
import LoginBox from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import Kakao from "../../Image/login/kakao_login.png";
import Git from "../../Image/Footer/github.svg";
// import {useCookies} from 'react-cookie'
// import axios from 'axios';

const Login = () => {
  const [nameInputClick, setNameInputClick] = useState(false);
  const [passwordInputClick, setPasswordInputClick] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

<<<<<<< HEAD
  console.log(name, password);

  // Kakao로그인 경로
  const KakaoLogin = () => {
    window.location.href = `http://localhost:3000/auth/kakao`;

    // axios.get(`/auth/token`).then((res) => {
    //   console.log(res);
    //   const { access_token } = res.data;
    //   axios.get(
    //     `/auth/kakao`,
    //     {},
    //     {
    //       headers: {
    //         Authorization: `Bearer ${access_token}`,
    //       },
    //     }
    //   );
    // });
  };

  // Kakao로그인 토큰 발급
=======
const [nameInputClick, setNameInputClick] = useState(false);
const [passwordInputClick, setPasswordInputClick] = useState(false);
  const handleBtn = () => {
    window.location.href = "http://localhost:3000/auth/kakao";
    
  }
  return (
>>>>>>> e5e20d21d696c0af6285c0b462a8e544006e7d82

  return (
    <LoginBox>
      <section className="title">
        <h1>로그인</h1>
      </section>
      <section className="namepsbar namebar">
        <h4>아이디</h4>
        <input
          className="nameinput"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          // 클릭될 때 작동
          onFocus={() => {
            setNameInputClick(true);
          }}
          // 클릭되어 있지 않을 때 작동input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setNameInputClick(false);
          }}
          placeholder={
            nameInputClick === true ? "" : "이메일 주소를 입력해주세요"
          }
        ></input>
      </section>
      <section className="namepsbar psbar">
        <h4>비밀번호</h4>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onFocus={() => {
            setPasswordInputClick(true);
          }}
          onBlur={() => {
            setPasswordInputClick(false);
          }}
          placeholder={
            passwordInputClick === true ? "" : "비밀번호를 입력해주세요"
          }
        ></input>
      </section>
      <section className="signbutton">
        <button>로그인하기</button>
      </section>
      <section className="already">
        <nav className="oathimg">
<<<<<<< HEAD
          <img src={Kakao} alt="OathImg" onClick={KakaoLogin}></img>
=======
          <button onClick={()=>{handleBtn()}}>
          <img src={Kakao} alt="OathImg"></img>
          </button>
>>>>>>> e5e20d21d696c0af6285c0b462a8e544006e7d82
          <img src={Git} alt="OathImg"></img>
        </nav>
        <nav className="linkcorr">
          <Link to="#" className="findac">
            아이디 / 비밀번호 찾기
          </Link>
          <Link to="/signup" className="gosignup">
            회원이 아니신가요? <h5> 회원가입하기</h5>
          </Link>
        </nav>
      </section>
    </LoginBox>
  );
};

export default Login;
