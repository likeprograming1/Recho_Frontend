import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBox from "./style";
import RECHO from "../../Image/Header/RECHO.svg";
import search from "../../Image/Header/search.svg";
import sidebar from "../../Image/Header/sidebar.svg";
import { Cookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { loginState, logoutState } from "../../redux/reducer/loginSlice";

const Header = () => {
  const [Search, setSearch] = useState(true);
  const cookie = new Cookies();
  const token = cookie.get("Authorization");
  const dispatch = useDispatch();
  const LoginState = useSelector((state)=> state.login.isLogin);
  console.log(LoginState);
  const KakaoLogin = () => {
    window.location.assign("http://localhost:3000/auth/kakao");
  };
  const handleLogOut = () => {
    dispatch(logoutState());
    cookie.remove("Authorization");
  }
  useEffect(()=>{
    if(token){
      dispatch(loginState());
    }
  },[])
  return (
    <HeaderBox>
      <div className="box">
        <Link to="/" className="LogoImg">
          <img src={RECHO} alt="LogoImg" />
        </Link>
        <nav className="nav-box">
          <div className="nav-menu">
            {Search ? (
              <button
                className="solo-searchBtn"
                onClick={() => {
                  setSearch(false);
                }}
              >
                <img
                  src={search}
                  alt="search-butoon"
                  className="navSearch"
                ></img>
              </button>
            ) : (
              <div className="Sinput">
                <input
                  type="text"
                  alt="search-input"
                  className="searchIn"
                ></input>
                <button
                  className="searchBtn"
                  onClick={() => {
                    setSearch(true);
                  }}
                >
                  <img
                    src={search}
                    alt="search-butoon"
                    className="navSearch"
                  ></img>
                </button>
              </div>
            )}
            <Link to="#" className="navBtn">
              고객센터
            </Link>
            {LoginState ? (
              <>
                <Link to="/mypage" className="navBtn">
                  마이페이지
                </Link>
                <Link onClick={handleLogOut} className="sign-navBtn">
                  로그아웃
                </Link>
              </>
            ) : (
              <Link onClick={KakaoLogin} className="sign-navBtn">
                로그인
              </Link>
            )}

            <img src={sidebar} alt="search-butoon" className="navSidebar"></img>
          </div>
        </nav>
      </div>
    </HeaderBox>
  );
};

export default Header;
