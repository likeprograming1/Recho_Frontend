import { React, useEffect, useState } from "react";
import ProfileBox from "./style";
import UserProfile from "../../Image/artist/userprofile.svg";
import { Link } from "react-router-dom";
import MyModal from "./modal";
// import good from "../../Image/etc/good.svg";
// import DealModal from "../moreItempage/modal.js";

const Mypage = () => {
  const [Modal, setModal] = useState(0);
  const handleModal = () => {
    setModal(!Modal)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ProfileBox>
      {Modal ? <MyModal data={()=>setModal()}></MyModal> : null}
      <article className="artpf">
        <Link to={`/mypage`}>
          <img src={UserProfile} alt="UserImg" />
        </Link>
        <h1 className="pftitle">Zz최강지존zZ</h1>
        <h4 className="pfname">김합정</h4>
        <h3 className="pfintro">
          ㄴ ㅏ ㄴ ㅡ ㄴ ㄱ ㅏ ㄲ ㅡ ㅁ ㄴ ㅜ ㄴ ㅁ ㅜ ㄹ을 흘린다.
        </h3>
        <nav className="tagbutton">
          <button>팔로우</button>
          <button>거래내역</button>
          <button
            className="modalbutton"
            onClick={() => {
              handleModal();
            }}
          >
            증명서
          </button>
          <button>· · ·</button>
        </nav>
      </article>
    </ProfileBox>
  );
};

export default Mypage;
