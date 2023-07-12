import { React, useEffect } from "react";
import ProfileBox from "./style";
import UserProfile from "../../Image/artist/userprofile.svg";
import { Link, useParams } from "react-router-dom";
import airpot from "../../Image/accessory/airpot.png";
import caps from "../../Image/accessory/caps.jpg";
import clock from "../../Image/accessory/clock.svg";
import danchu from "../../Image/accessory/danchu.jpeg";
import lucky from "../../Image/clothing/lucky.png";
import cloth1 from "../../Image/clothing/cloth1.png";
import cloth2 from "../../Image/clothing/cloth2.png";
import cloth3 from "../../Image/clothing/cloth3.png";
import dodochico from "../../Image/clothing/dodochico.png";
import happy from "../../Image/clothing/happy.png";
import swamp from "../../Image/clothing/swamp.webp";
import university from "../../Image/clothing/university.webp";
import guga3 from "../../Image/furniture/gagu3.jpeg";
import shoes from "../../Image/sundries/customshoes.jpeg";
import keyboard from "../../Image/electronic/keyboard.jpeg";
import good from "../../Image/etc/good.svg";
import { modalstate } from "../../redux/reducer/modalSlice";
import DealModal from "../moreItempage/modal.js";
import { useDispatch, useSelector } from "react-redux";

const Artist = () => {
  const user = useParams().id;
  const dispath = useDispatch();
  const tagImage = [
    {
      data: [
        {
          id: 10,
          image: lucky,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 11,
          image: dodochico,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 12,
          image: happy,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 13,
          image: swamp,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 14,
          image: university,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 15,
          image: cloth1,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 16,
          image: cloth2,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 17,
          image: cloth3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 7,
        },
      ],
    },
    {
      data: [
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 7,
        },
      ],
    },
    {
      data: [
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 7,
        },
      ],
    },
    {
      data: [
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 7,
        },
      ],
    },
    {
      data: [
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 7,
        },
      ],
    },
    {
      data: [
        {
          id: 5,
          image: lucky,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 5,
          image: airpot,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 5,
          image: caps,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 5,
          image: clock,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 5,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 5,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 5,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 5,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "KIM PLOOW",
          price: "예상가격 : 10만원 ~ 20만원",
          like: 7,
        },
      ],
    },
  ];
  const Modal = useSelector((state) => state.deal.modal);
  
  const handleModal = () => {
    dispath(modalstate());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ProfileBox>
      {Modal ? <DealModal data={tagImage[user].data}></DealModal> : null}
      <article className="artpf">
        <Link to={`/artist/${user}`}>
          <img src={UserProfile} alt="UserImg" />
        </Link>
        <h1 className="pftitle">시계는 애플워치</h1>
        <h4 className="pfname">김합정</h4>
        <h3 className="pfintro">합정에서 커스텀하고 있는 김합정입니다 ~</h3>
        <nav className="tagbutton">
          <button>팔로우</button>
          <button>거래내역</button>
          <button
            className="modalbutton"
            onClick={() => {
              handleModal();
            }}
          >
            의뢰하기
          </button>
          <button>· · ·</button>
        </nav>
      </article>
      <article className="artwork">
        <h1>포트폴리오</h1>
        <div className="worklist">
          {tagImage[user].data &&
            tagImage[user].data.map((data, idx) => {
              return (
                <div className="Box">
                  <Link to={`/morepage/${user}/${idx}`} className="tagImgBox">
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
