import React from "react";
import ProfileBox from "./style";
import UserProfile from "../../Image/artist/userprofile.svg";
import { Link } from "react-router-dom";
import lucky from "../../Image/clothing/lucky.png";
import good from "../../Image/etc/good.svg";

const Artist = () => {
  const data = [
    {
      image: lucky,
      title: "하리보 곰돌이 악세서리",
      content: "KIM PLOOW",
      price: "₩13,500",
      like: 0,
    },
    {
      image: lucky,
      title: "하리보 곰돌이 악세서리",
      content: "KIM PLOOW",
      price: "₩13,500",
      like: 1,
    },
    {
      image: lucky,
      title: "하리보 곰돌이 악세서리",
      content: "KIM PLOOW",
      price: "₩13,500",
      like: 2,
    },
    {
      image: lucky,
      title: "하리보 곰돌이 악세서리",
      content: "KIM PLOOW",
      price: "₩13,500",
      like: 3,
    },
    {
      image: lucky,
      title: "하리보 곰돌이 악세서리",
      content: "KIM PLOOW",
      price: "₩13,500",
      like: 4,
    },
    {
      image: lucky,
      title: "하리보 곰돌이 악세서리",
      content: "KIM PLOOW",
      price: "₩13,500",
      like: 5,
    },
    {
      image: lucky,
      title: "하리보 곰돌이 악세서리",
      content: "KIM PLOOW",
      price: "₩13,500",
      like: 6,
    },
    {
      image: lucky,
      title: "하리보 곰돌이 악세서리",
      content: "KIM PLOOW",
      price: "₩13,500",
      like: 7,
    },
  ];

  return (
    <ProfileBox>
      <article className="artpf">
        <Link to={"/artist"}>
          <img src={UserProfile} alt="UserImg" />
        </Link>
        <h1 className="pftitle">시계는 애플워치</h1>
        <h4 className="pfname">김합정</h4>
        <h3 className="pfintro">합정에서 커스텀하고 있는 김합정입니다 ~</h3>
        <nav className="tagbutton">
          <button>팔로우</button>
          <button>거래내역</button>
          <button>의뢰하기</button>
          <button>· · ·</button>
        </nav>
      </article>
      <article className="artwork">
        <h1>포트폴리오</h1>
        <div className="worklist">
          {data &&
            data.map((data) => {
              return (
                <div className="Box">
                  <Link to={"/morepage/2"} className="tagImgBox">
                    <img
                      src={data.image}
                      alt="상품 이미지"
                      className="tagImg"
                    ></img>
                    <b className="title">{data.title}</b>
                    <p className="content">{data.content}</p>
                    <b className="price">{data.price}</b>
                  </Link>
                  <span className="likeBox">
                    <button className="btn">
                      <img src={good} alt="like-button"></img>
                    </button>
                    <p>{data.like}</p>
                  </span>
                </div>
              );
            })}
        </div>
      </article>
    </ProfileBox>
  );
};

export default Artist;
