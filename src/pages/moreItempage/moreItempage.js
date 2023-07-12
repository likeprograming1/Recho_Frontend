import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import More from "./style";
import unlike from "../../Image/etc/unlike.png";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

//옷이미지
import airpot from "../../Image/accessory/airpot.png";
import caps from "../../Image/accessory/caps.jpg";
import clock from "../../Image/accessory/clock.svg";
import danchu from "../../Image/accessory/danchu.jpeg";
import lucky from "../../Image/clothing/lucky.png";
import white from "../../Image/clothing/white.svg";
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

import DealModal from './modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalstate } from '../../redux/reducer/modalSlice';

const MoreItemPage = () => {
  const id = useParams().id;
  const select = useParams().product;
  const Modal = useSelector(state => state.deal.modal);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [Action, setAction] = useState(0);
  const tagImage = [
    {
      data: [
        {
          id: 10,
          image: lucky,
          title: "하리보 곰돌이 악세서리",
          day: "1주 ~ 2주",
          artist: "haribo",
          as: "예",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 11,
          image: dodochico,
          title: "하리보 곰돌이 악세서리",
          day: "1주 ~ 2주",
          artist: "haribo",
          as: "예",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 12,
          image: happy,
          title: "하리보 곰돌이 악세서리",
          day: "1주 ~ 2주",
          artist: "haribo",
          as: "예",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 13,
          image: swamp,
          title: "하리보 곰돌이 악세서리",
          day: "1주 ~ 2주",
          artist: "haribo",
          as: "예",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 14,
          image: university,
          title: "하리보 곰돌이 악세서리",
          day: "1주 ~ 2주",
          artist: "haribo",
          as: "예",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 15,
          image: cloth1,
          title: "하리보 곰돌이 악세서리",
          day: "1주 ~ 2주",
          artist: "haribo",
          as: "예",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 16,
          image: cloth2,
          title: "하리보 곰돌이 악세서리",
          day: "1주 ~ 2주",
          artist: "haribo",
          as: "예",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 17,
          image: cloth3,
          title: "하리보 곰돌이 악세서리",
          day: "1주 ~ 2주",
          artist: "haribo",
          as: "예",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
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
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 1,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
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
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 2,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
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
          day: "1주 ~ 2주",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 3,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
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
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 4,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
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
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 0,
        },
        {
          id: 5,
          image: airpot,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 1,
        },
        {
          id: 5,
          image: caps,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 2,
        },
        {
          id: 5,
          image: clock,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 3,
        },
        {
          id: 5,
          image: danchu,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 4,
        },
        {
          id: 5,
          image: guga3,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 5,
        },
        {
          id: 5,
          image: shoes,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 6,
        },
        {
          id: 5,
          image: keyboard,
          title: "하리보 곰돌이 악세서리",
          content: "새제품을 커스텀 하였습니다.",
          price: "10만원 ~ 20만원",
          like: 7,
        },
      ],
    },
  ];
  const data = tagImage[id].data;
  // const before = [white, ];

  const handleModal = () => {
    dispath(modalstate());
  }
  const handleNavigate = () => {
    navigate("/artist");
  }
  useEffect(()=>{
   window.scrollTo(0,0);
  },[])

  return (
    <More>
      {Modal ? <DealModal data={data[select]}></DealModal> : null}
      <section className="tagsName">
        <button
          className={Action ? "tag" : "lasttag"}
          onClick={() => {
            setAction(0);
          }}
        >
          Before
        </button>
        <button
          className={Action ? "lasttag" : "tag"}
          onClick={() => {
            setAction(1);
          }}
        >
          After
        </button>
      </section>
      <section className="ordermade">
        <div className="Imgbox">
          <Carousel
            fullHeightHover={true}
            autoPlay={true}
            indicators={false}
            swipe={true}
            infiniteLoop={true}
            animation="slide"
            index={Action}
            onChange={(e) => {
              setAction(e);
            }}
          >
            <Paper>
              <img src={white} alt="mainImg" className="white"></img>
            </Paper>
            <Paper>
              <img
                src={data[select].image}
                alt="mainImg"
                className="MainImg"
              ></img>
            </Paper>
          </Carousel>

          <div className='box'>
            <div className="orderlist">
              <div className="listTitle">
                <span className='title'>{data[select].title}</span>
              </div>
              <ul className="listContent">
                <li className="ContentLine">
                  <h2>작업 비용</h2>
                  <h2>{data[select].price}</h2>
                </li>
                <li className="ContentLine">
                  <h2>작업 기간</h2>
                  <h2>{data[select].day}</h2>
                </li>
                <li className="ContentLine">
                  <h2>작업 아티스트</h2>
                  <h2>{data[select].artist}</h2>
                </li>
                <li className="ContentLine">
                  <h2>AS가능 유무</h2>
                  <h2>{data[select].as}</h2>
                </li>
                <li className="ContentLine">
                  <h2>설명</h2>
                  <h2>{data[select].content}</h2>
                </li>
              </ul>
              <p className="TotalPrice">{data[select].totalPrice}</p>
              <div className="listFooter">
                <img src={unlike} alt="likebtn" className="likeImg"></img>
                <button
                  className="orderBtn"
                  onClick={() => {
                    handleModal();
                  }}
                >
                  의뢰하기
                </button>
              </div>
            </div>
            <button
              className="artistpage"
              onClick={() => {
                handleNavigate();
              }}
            >
              '{data[select].artist}'님의 다른 작품 보러가기
            </button>
          </div>
        </div>
        {/* {
        dataMoreImg && dataMoreImg[id].map(item => {
          return <img src={item} alt="MoreImg" className="MoreImg"></img>
        })
      } */}
      </section>
      {/* <section className="tagHeaderBox">
      <div className="tagHeader">
        <button className="select">상품 상세</button>
        <button className="no-select">상품평</button>  
        <button className="no-select">상품문의</button> 
        <button className="no-select">배송/교환/반품 안내</button> 
      </div>
    </section>
    <section className="productImgBox">
      {dataMoreImg[id] && dataMoreImg[id].map((item, idx) => {
        return <img src={item} alt="productimg" className="product" key={idx}></img>
      })}
      
    </section> */}
    </More>
  );
}

export default MoreItemPage;