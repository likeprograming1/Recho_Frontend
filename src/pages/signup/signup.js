import SignUpBox from './style.js'
import { useState } from "react"
import { Link } from "react-router-dom";
import { ModalBackdrop, ModalView, ExitBtn} from "../modal/styleartist.js";
import { ModalBackdrops, ModalViews, ExitBtns} from "../modal/normalmodal.js"


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
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] =useState("")
  // const [nameCheck, setNameCheck] =useState("")
    // const validateName = (name) => {
  //   return name
  //     .toLowerCase()
  //     .match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|].{3,10}$/);
  // };

  // const isNameValid = validateName(name);

  // const onChangeName = useCallback( async (e) => {
  //   const currName = e.target.value;
  //   setName(currName);

  //   if (!validateName(currName)) {
  //     setNameCheck("이메일 형식이 올바르지 않습니다.")
  //   } else {
  //       setNameCheck("올바른 이메일 형식입니다.")
  //     }
  //   })
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
      <input className="nameinput" type="text" name="name"
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
      <section className="emailbar">
        <h4>이메일</h4>
        <input type="email" name="email" 				
        onFocus={() => {
					setEmailInputClick(true);
				}}
				onBlur={() => {
					setEmailInputClick(false);
				}} placeholder={emailInputClick === true ? "" : "이메일을 입력해주세요"}></input>
        <input type="email" name="email" placeholder="naver.com"></input>
        <button>이메일 중복체크</button>
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
        <h5>(영문 대소문자, 특수문자 포함 8자 이상)</h5>
      </section>
      <section className="nickbar">
      <h4>닉네임</h4>
      <input type="nickname" name="nickname" 
        onFocus={() => {
					setNickInputClick(true);
				}}
				onBlur={() => {
					setNickInputClick(false);
				}} placeholder={nickInputClick === true ? "" : "닉네임을 입력해주세요"} ></input>
      <h5>특수문자 제외 10자이하</h5>
      </section>
      <section className="check">
      <div className="sercheck">
      <input className="servicecheck" type="checkbox" name="service"></input>
      <label for="service"> 서비스 이용약관 </label>
      </div>
      <div className="corcheck">
      <input className="checkinput" type="checkbox" ></input>
      <label for="correct"> 개인정보 수집 및 이용동의 </label >
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