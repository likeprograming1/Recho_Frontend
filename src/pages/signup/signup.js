import React from 'react';
import SignUpBox from './style.js'
import { useState } from "react"
import { Link } from "react-router-dom";
import { ModalBackdrop, ModalView, ExitBtn} from "../modal/styleartist.js";
import { ModalBackdrops, ModalViews, ExitBtns} from "../modal/normalmodal.js"
import Reco from "../../Image/Header/RECHO.svg";

const SignUp = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);

//모달 -------------------------------------
// 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현
// * 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 
// 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */

  const openArtistModalHandler = () => {
    setIsOpen(!isOpen) 
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
  };

  const openNormalModalHandler = () => {
    setIsOpens(!isOpens)
  }

  // ----------------------------------------

  //유효성 검사 -------------------------------
  //상태 초기값 설정

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailcom, setEmailCom] = useState("");

  //유효성검사 오류 메세지 설정

  const [nameMessage, setNameMessage] = useState("");
  const [nickMessage, setNickMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailcomMessage, setEmailComMessage] = useState("");

  //유효성 검사 세팅(맞는지 Boolean)

  const [isName, setIsName] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailCom, setIsEmailCom] = useState(false);
  //이벤트 핸들러

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
    const idRegExp = /^[가-힣]{2,12}$/;
    if (!idRegExp.test(currentName)) {
      setNameMessage("실명을 한글로 입력해주세요!");
      setIsName(isName);
    } 
    else {
      setNameMessage(); 
      setIsName(isName);
    }
  };
  const onChangePass = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자/영문자/특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(isPassword);
    } else {
      setPasswordMessage();
      setIsPassword(isPassword);
    }
  };
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,20}$/;
    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식에 맞지 않습니다!");
      setIsEmail(isEmail);
    } else {
      setEmailMessage();
      setIsEmail(isEmail);
    }
  };
  const onChangeEmailCom = (e) => {
    const currentEmailCom = e.target.value;
    setEmailCom(currentEmailCom);
    const domainRegExp = /^(?=.*[a-z])[a-z]+\.com$/;

    if (!domainRegExp.test(currentEmailCom)) {
      setEmailComMessage("이메일의 형식에 맞지 않습니다!");
      setIsEmailCom(isEmailCom);
    } else {
      setEmailComMessage();
      setIsEmailCom(isEmailCom);
    }
  };
  const onChangeNickname = (e) => {
    const currentNickname = e.target.value;
    setNickname(currentNickname);
 
    if (currentNickname.length < 3 || currentNickname.length > 11) {
      setNickMessage("닉네임은 2글자 이상 10글자 이하로 입력해주세요!");
      setIsNickname(isNickname);
    } else {
      setNickMessage();
      setIsNickname(isNickname);
    }
  };


  // --------------------------------------------------

     const [nameInputClick, setNameInputClick] = useState(false);
     const [emailInputClick, setEmailInputClick] = useState(false);
     const [passwordInputClick, setPasswordInputClick] = useState(false);
     const [nickInputClick, setNickInputClick] = useState(false);

  return (
    <SignUpBox>
      <section className="title">
      <h1>회원가입</h1>
      </section>
      <section className="namepsbar namebar">
      <h4>이름</h4>
      <input className="nameinput" type="text" value={name} name="name" onChange={onChangeName}
      // 클릭될 때 작동
				onFocus={() => {
					setNameInputClick(true);
				}}
				// 클릭되어 있지 않을 때 작동input 이외의 영역이 클릭되었을 때)
				onBlur={() => {
					setNameInputClick(false);
				}} placeholder={nameInputClick === true ? "" : "실명을 입력해주세요"}></input>
        <h5>특수문자 제외 10자이하</h5>
      </section>
      <p className="message1">{nameMessage}</p>
      <section className="emailbar">
        <h4>이메일</h4>
        <input type="email" name="email" value={email} onChange={onChangeEmail}
        onFocus={() => {
					setEmailInputClick(true);
				}}
				onBlur={() => {
					setEmailInputClick(false);
				}} placeholder={emailInputClick === true ? "" : "이메일을 입력해주세요"}></input>
        <input type="email" name="email" placeholder="naver.com" onChange={onChangeEmailCom}></input>
        <button>이메일 중복체크</button>
      </section>
      <p className='message2'>{emailMessage}</p>
      <section className="namepsbar psbar">
        <h4>비밀번호</h4>
        <input type="password" name="password" value={password} onChange={onChangePass}
        onFocus={() => {
					setPasswordInputClick(true);
				}}
				onBlur={() => {
					setPasswordInputClick(false);
				}} placeholder={passwordInputClick === true ? "" : "비밀번호를 입력해주세요"} ></input>
        <h5>(영문 대소문자, 특수문자 포함 8자 이상)</h5>
      </section>
      <p className='message3'>{passwordMessage}</p>
      <section className="nickbar">
      <h4>닉네임</h4>
      <input type="nickname" name="nickname" value={nickname} onChange={onChangeNickname}
        onFocus={() => {
					setNickInputClick(true);
				}}
				onBlur={() => {
					setNickInputClick(false);
				}} placeholder={nickInputClick === true ? "" : "닉네임을 입력해주세요"} ></input>
      <h5>특수문자 제외 10자이하</h5>
      </section>
      <p className='message4'>{nickMessage}</p>
      <section className="check">
        <div className="sercheck">
          <input input className="servicecheck" type="checkbox" name="service">
          </input>
          <label for="service">
            서비스 이용약관 
          </label>
        </div>
      <div className="corcheck">
        <input className="checkinput" type="checkbox" >
        </input>
        <label for="correct"> 
          개인정보 수집 및 이용동의 
        </label >
      </div>
      </section>
      <section className="signbutton">
        <button onClick={openArtistModalHandler}>
          아티스트 가입하기
        </button>
        {isOpen ? 
        <ModalBackdrop onClick={openArtistModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ExitBtn onClick={openArtistModalHandler}>x</ExitBtn>
              <img src={Reco} alt='Logo-img'/>
              <div className='desc'>정말 아티스트 회원으로 가입하시겠습니까?</div>
              <button>아티스트 가입하기</button>
            </ModalView>
          </ModalBackdrop>
          : null
        }
        <button onClick={openNormalModalHandler}>일반 회원 가입하기</button>
        {isOpens ? 
        <ModalBackdrops onClick={openNormalModalHandler}>
            <ModalViews onClick={(e) => e.stopPropagation()}>
              <ExitBtns onClick={openNormalModalHandler}>x</ExitBtns>
              <img src={Reco} alt='Logo-img'/>
              <div className='desc'>정말 일반회원으로 가입하시겠습니까?</div>
              <button>일반 회원 가입하기</button>
            </ModalViews>
          </ModalBackdrops>
          : null
        }
      </section>
      <section className="already">
        <h6>
          이미 아이디가 있으신가요?
        </h6>
          <Link to="/login" className="gologin">로그인하기</Link>
      </section>
    </SignUpBox>
  )
}

export default SignUp