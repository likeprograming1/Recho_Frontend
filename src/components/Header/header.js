import { Link } from "react-router-dom";
import HeaderBox from "./style";
import RECHO from "../../Image/Header/RECHO.svg";
import search from "../../Image/Header/search.svg";
import sidebar from "../../Image/Header/sidebar.svg";
import { useState } from "react";

const Header = () => {
  const [Search, setSearch] = useState(true);

  return (
    <HeaderBox>
      <div className="box">
        <Link to="/" className="LogoImg">
          <img src={RECHO} alt="LogoImg"/>
        </Link>
        <nav className="nav-box">
          <div className="nav-menu">
            {Search ?
            <button className="solo-searchBtn" onClick={()=>{setSearch(false)}}>
              <img src={search} alt="search-butoon"  className="navSearch"></img>
            </button>
            : 
            (
            <div className="Sinput">
              <input type="text" alt="search-input" className="searchIn"></input>
              <button className="searchBtn" onClick={()=>{setSearch(true)}}>
                <img src={search} alt="search-butoon"  className="navSearch"></img>
              </button>
            </div>
          )}
            <Link to="#" className="navBtn">고객센터</Link>
            <Link to="#" className="navBtn">관신상품</Link>
            <Link to="#" className="sign-navBtn">로그인</Link>
            <img src={sidebar} alt="search-butoon"  className="navSidebar"></img>
          </div>
        </nav> 
      </div>
    </HeaderBox>
  )
}

export default Header;