import MainBox from "./style";
import Slide from "../../Hooks/slide/slide";
import airpot from "../../Image/accessory/airpot.png";
import cap from "../../Image/accessory/cap.jpg";
import caps from "../../Image/accessory/caps.jpg";
import clock from "../../Image/accessory/clock.jpeg";
import danchu from "../../Image/accessory/danchu.jpeg";
import haribo from "../../Image/accessory/haribo.jpg";
import lucky from "../../Image/clothing/lucky.png";
import good from "../../Image/etc/good.svg";

import { useState } from "react";


const Main = () => {
  
  const data = [{
    image : airpot,
    title : "에어팟 케이스 커스텀",
    price : "27,500원",
    content : "에어팟 케이스를 이용한 커스텀 마이징"
  }, {
    image : cap,
    title : "모자 커스텀",
    price : "17,500원",
    content : "모자를 이용한 커스텀 마이징"
  },{
    image : caps,
    title : "모자 커스텀",
    price : "17,500원",
    content : "모자를 이용한 커스텀 마이징"
  },{
    image : clock,
    title : "시계 커스텀",
    price : "17,500원",
    content : "시계를 이용한 커스텀 마이징"
  },{
    image : haribo,
    title : "팔찌 커스텀",
    price : "17,500원",
    content : "하리보를 팔찌 커스텀 마이징"
  },{
    image : danchu,
    title : "단츄 커스텀",
    price : "5,000원",
    content : "단츄를 이용한 커스텀 마이징"
  }];
  const tag = ["의  류", "가  구", "잡  화", "악세서리", "전자기기", "AS 가능"];
  const [Select, setSelect] = useState(0);
  const tagImage = [{
    data : [{
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "₩13,500",
      like : 0,
    },{
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "₩13,500",
      like : 1,
    },{
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "₩13,500",
      like : 2,
    },{
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "₩13,500",
      like : 3,
    },{
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "₩13,500",
      like : 4,
    },{
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "₩13,500",
      like : 5,
    },{
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "₩13,500",
      like : 6,
    },{
      image : lucky,
      title : "하리보 곰돌이 악세서리",
      content : "KIM PLOOW",
      price : "₩13,500",
      like : 7,
    }],
  },{
    data : [],
  },{
    data : [],
  },{
    data : [],
  },{
    data : [],
  },{
    data : [],
  }]
  return (<MainBox>
    <Slide />
    <section className="realTime">
      <h2>실시간 베스트</h2>
      <div className="BestBox">
      {data && data.map(item => {
        return (
          <button className="Best">
            <img src={item.image} alt="상품"></img>
            <b className="title">{item.title}</b>
            <b className="price">{item.price}</b>
            <span className="content">{item.content}</span>
          </button>
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
            <button className="tagImgBox">
              <img src={data.image} alt="상품 이미지" className="tagImg"></img>
              <b className="title">{data.title}</b>
              <p className="content">{data.content}</p>
              <b className="price">{data.price}</b>
            </button>
            <span className="likeBox">
              <button className="btn"><img src={good} alt="like-button"></img></button>
              <p>{data.like}</p>
            </span>
          </div>
        )
      })}
      </div>
    </section>
  </MainBox>);
}

export default Main;  