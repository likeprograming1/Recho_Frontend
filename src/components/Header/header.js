import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderBox from "./style";
import RECHO from "../../Image/Header/RECHO.svg";
import search from "../../Image/Header/search.svg";
import sidebar from "../../Image/Header/sidebar.svg";

const Header = () => {
  const navigate = useNavigate();
  const [Search, setSearch] = useState(true);
  const KakaoLogin = () => {
    navigate.push("/auth/kakao");

    // axios.get(`/auth/token`)
    // .then((res) => {
    //   console.log(res);
    //   const { access_token } = res.data;
    //   axios.get(
    //       `/auth/kakao`,
    //       {},
    //       {
    //           headers: {
    //               Authorization: `Bearer ${access_token}`,
    //           }
    //       }

    //   )}
    //   )
  };
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
            <Link to="#" className="navBtn">
              관심상품
            </Link>
            <Link onClick={KakaoLogin} className="sign-navBtn">
              로그인
            </Link>
            <img src={sidebar} alt="search-butoon" className="navSidebar"></img>
          </div>
        </nav>
      </div>
    </HeaderBox>
  );
};

export default Header;
