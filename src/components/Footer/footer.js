import FooterBox from "./style";
import { Link } from "react-router-dom";
import instagram from "../../Image/Footer/instagram.svg";
import facebook from "../../Image/Footer/facebook.svg";
import github from "../../Image/Footer/github.svg";
import kakao from "../../Image/Footer/kakao.svg";
import naver from "../../Image/Footer/naver.svg";

const Footer = () => {
  return(
    <FooterBox>
      <div className="box">
        <div className="footer-head">
          <Link to="#" className="footer-names">회사소개</Link>
          <Link to="#" className="footer-names">인재채용</Link>
          <Link to="#" className="footer-names">제휴제안</Link>
          <Link to="#" className="footer-names">사용자 이용약관</Link>
          <Link to="#" className="footer-names">개인정보처리방침</Link>
        </div>
        <div className="footer-boxs">
          <ul className="footer-box">
            <li>
              <p className="title">소재지</p>
              <span className="content">서울특별시 마포구 양화로8길 38 2층</span>
            </li>
            <li>
              <p className="title">고객센터</p>
              <span className="content">02-828-8282</span>
            </li>
            <li>
              <p className="title">고마운 사람들</p>
              <span className="content">김종석 임시은 갈현준 한승진 고정훈</span>
            </li>
            <li>
              <p className="title">사업자 번호</p>
              <span className="content">000-11-23456-7890-123455-421551</span>
            </li>
            <li className="lastli">
              <div className="Foobtm">
                <small>본 사이트에 게시된 아티스트 및 작품 정보가 무단으로 수집되는 것을 거부합니다.</small>
                <small>본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다.</small>
              </div>
              <div className="lastImg">
                <img src={instagram} alt="instagram-logo"></img>
                <img src={facebook} alt="facebook-logo"></img>
                <img src={naver} alt="naver-logo"></img>
                <img src={github} alt="github-logo"></img>
                <img src={kakao} alt="kakao-logo" className="lastchild"></img>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </FooterBox>
  )
}
export default Footer;