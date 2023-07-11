
import React from 'react';
import MainBox from "./style";
import Slide from "../../Hooks/slide/slide";
import airpot from "../../Image/accessory/airpot.png";
import cap from "../../Image/accessory/cap.jpg";
import caps from "../../Image/accessory/caps.jpg";
import clock from "../../Image/accessory/clock.svg";
import danchu from "../../Image/accessory/danchu.jpeg";
import haribo from "../../Image/accessory/haribo.jpg";
import lucky from "../../Image/clothing/lucky.png";
import guga3 from "../../Image/furniture/gagu3.jpeg";
import shoes from "../../Image/sundries/customshoes.jpeg";
import keyboard from "../../Image/electronic/keyboard.jpeg";
import good from "../../Image/etc/good.svg";
import talk from "../../Image/etc/talk.svg";
import upload from "../../Image/etc/upload.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Chatting from '../chatting/chatting';
import { useDispatch, useSelector } from 'react-redux';
import { modalstate } from '../../redux/reducer/modalSlice';
import List from '../chatting/list';
import Product from '../product/product';
import { productState } from '../../redux/reducer/productSlice';

const Main = () => {
  const dispath = useDispatch();
  const data = [{
    id : 4,
    image : airpot,
    title : "에어팟 케이스 커스텀",
    price : "27,500원",
    content : "에어팟 케이스를 이용한 커스텀 마이징"
  }, {
    id : 2,
    image : cap,
    title : "모자 커스텀",
    price : "17,500원",
    content : "모자를 이용한 커스텀 마이징"
  },{
    id : 2,
    image : caps,
    title : "모자 커스텀",
    price : "17,500원",
    content : "모자를 이용한 커스텀 마이징"
  },{
    id : 2,
    image : clock,
    title : "시계 커스텀",
    price : "17,500원",
    content : "시계를 이용한 커스텀 마이징"
  },{
    id : 3,
    image : haribo,
    title : "팔찌 커스텀",
    price : "17,500원",
    content : "하리보를 팔찌 커스텀 마이징"
  },{
    id : 3,
    image : danchu,
    title : "단츄 커스텀",
    price : "5,000원",
    content : "단츄를 이용한 커스텀 마이징"
  }];
  const tag = ["의  류", "가  구", "잡  화", "악세서리", "전자기기", "AS 가능"];
  const [Select, setSelect] = useState(0);
  const Box = useSelector(state => state.product.Box);
  const Chat = useSelector(state => state.deal.modal);
  const home = useSelector(state => state.deal.back);
  console.log(Box);
  const tagImage = [{
    data : [{
      id : 0,
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 0,
    },{
      id : 0,
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 1,
    },{
      id : 0,
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 2,
    },{
      id : 0,
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 3,
    },{
      id : 0,
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 4,
    },{
      id : 0,
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 5,
    },{
      id : 0,
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 6,
    },{
      id : 0,
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 7,
    }],
  },{
    data : [{
      id : 1,
      image : guga3,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 0,
    },{
      id : 1,
      image : guga3,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 1,
    },{
      id : 1,
      image : guga3,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 2,
    },{
      id : 1,
      image : guga3,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 3,
    },{
      id : 1,
      image : guga3,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 4,
    },{
      id : 1,
      image : guga3,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 5,
    },{
      id : 1,
      image : guga3,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 6,
    },{
      id : 1,
      image : guga3,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 7,
    }],
  },{
    data : [{
      id : 2,
      image : shoes,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 0,
    },{
      id : 2,
      image : shoes,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 1,
    },{
      id : 2,
      image : shoes,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 2,
    },{
      id : 2,
      image : shoes,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 3,
    },{
      id : 2,
      image : shoes,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 4,
    },{
      id : 2,
      image : shoes,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 5,
    },{
      id : 2,
      image : shoes,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 6,
    },{
      id : 2,
      image : shoes,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 7,
    }],
  },{
    data : [{
      id : 3,
      image : danchu,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 0,
    },{
      id : 3,
      image : danchu,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 1,
    },{
      id : 3,
      image : danchu,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 2,
    },{
      id : 3,
      image : danchu,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 3,
    },{
      id : 3,
      image : danchu,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 4,
    },{
      id : 3,
      image : danchu,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 5,
    },{
      id : 3,
      image : danchu,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 6,
    },{
      id : 3,
      image : danchu,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 7,
    }],
  },{
    data : [{
      id : 4,
      image : keyboard,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 0,
    },{
      id : 4,
      image : keyboard,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 1,
    },{
      id : 4,
      image : keyboard,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 2,
    },{
      id : 4,
      image : keyboard,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 3,
    },{
      id : 4,
      image : keyboard,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 4,
    },{
      id : 4,
      image : keyboard,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 5,
    },{
      id : 4,
      image : keyboard,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 6,
    },{
      id : 4,
      image : keyboard,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 7,
    }],
  },{
    data : [{
      id : 5,
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 0,
    },{
      id : 5,
      image : airpot,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 1,
    },{
      id : 5,
      image : caps,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 2,
    },{
      id : 5,
      image : clock,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 3,
    },{
      id : 5,
      image : danchu,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 4,
    },{
      id : 5,
      image : guga3,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 5,
    },{
      id : 5,
      image : shoes,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 6,
    },{
      id : 5,
      image : keyboard,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "예상가격 : 10만원 ~ 20만원",
      like : 7,
    }],
  }]
  const handleModal = () => {
    dispath(modalstate());
  }

  return (<MainBox>
    <Slide />
    {Box ? <Product /> : null}
    {Chat ? 
    home ? <List /> : <Chatting /> 
    : null }
    <section className="realTime">
      <h2>실시간 베스트</h2>
      <div className="BestBox">
      {data && data.map(item => {
        let address = `/morepage/${item.id}`;
        return (
          <Link to={address} className="Best">
            <img src={item.image} alt="상품"></img>
            <b className="title">{item.title}</b>
            <b className="price">{item.price}</b>
            <span className="content">{item.content}</span>
          </Link>
        )
      })}
      </div>
    </section>
    <section className="tags">
      {tag && tag.map((tags, idx) => {
        return (
          <button className="tag" onClick={()=>{setSelect(idx)}}>
            <h1 className={Select === idx ? "select": "non-select" }>{tags}</h1>
          </button>
        )
      })}
      <div className="boxs">
      {tagImage[Select].data && tagImage[Select].data.map(data => {
        return (
          <div className="Box">
            <Link to="/artist" className="tagImgBox">
              <img src={data.image} alt="상품 이미지" className="tagImg"></img>
              <b className="title">{data.title}</b>
              <p className="content">{data.content}</p>
              <b className="price">{data.price}</b>
            </Link>
            <span className="likeBox">
              <button className="btn"><img src={good} alt="like-button"></img></button>
              <p>{data.like}</p>
            </span>
          </div>
        )
      })}
      </div>
    </section>
    <section className='sitetalk'>
      <button className='upload' onClick={()=>{dispath(productState())}}>
        <img src={upload} alt="talk-img" className='upload-img'></img>
      </button>
      <button className='talk' onClick={()=>{handleModal()}}>
        <img src={talk} alt="talk-img" className='talk-img'></img>
      </button>
    </section>
  </MainBox>);
}

export default Main;  