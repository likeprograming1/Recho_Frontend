import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import More from "./style";
import unlike from "../../Image/etc/unlike.png";

//시계이미지
import clock from "../../Image/accessory/clock.svg";
import image1 from "../../Image/clocks/image 33.svg";
import image2 from "../../Image/clocks/image 34.svg";
import image3 from "../../Image/clocks/image 35.svg";
import image4 from "../../Image/clocks/image 36.svg";
import image5 from "../../Image/clocks/image 37.svg";
//옷이미지
import lucky from "../../Image/clothing/lucky.png";
import happy from "../../Image/clothing/happy.png";
import dodochico from "../../Image/clothing/dodochico.png";
import university from "../../Image/clothing/university.webp";
import swamp from "../../Image/clothing/swamp.webp";

//가구이미지
import gagu1 from "../../Image/furniture/gagu1.jpeg";
import gagu2 from "../../Image/furniture/gagu2.jpeg";
import gagu3 from "../../Image/furniture/gagu3.jpeg";
import gagu4 from "../../Image/furniture/gagu3.jpeg";
import gagu5 from "../../Image/furniture/gagu3.jpeg";
import DealModal from './modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalstate } from '../../redux/reducer/modalSlice';

const MoreItemPage = () => {
  const id = useParams().id;
  const Modal = useSelector(state => state.deal.modal);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const tags = ["의류", "가구", "잡화", "악세서리", "전자기기", "AS가능"];
  const tag = ["옷", "쇼파", "신발", "단추", "키보드", "가능"];
  const data = [{
    image : lucky,
    title : "Lucky한 하루를 보내는 커스텀 옷",
    name : "CL-21000",
    price : "39,000원",
    day : "1주",
    artist : "popoorn",
    as : "무",
    deliveryPay : "5,000원",
    totalPrice : "44,000원"
  },{
    image : gagu1,
    title : "카시오 G-SHOCK 인덱스 커스텀",
    name : "GA-2100",
    price : "49,800 원",
    day : "약 2주",
    artist : "시계는애플워치",
    as : "유",
    deliveryPay : "5,000원",
    totalPrice : "54,800원"
  }
  ,{
    image : clock,
    title : "카시오 G-SHOCK 인덱스 커스텀",
    name : "GA-2100",
    price : "49,800 원",
    day : "약 2주",
    artist : "시계는애플워치",
    as : "유",
    deliveryPay : "5,000원",
    totalPrice : "54,800원"
  }];
  const dataMoreImg = [[lucky, dodochico, happy, university, swamp]
  ,[gagu1, gagu2, gagu3,gagu4, gagu5]
  ,[image1,image2,image3,image4,image5]];

  const handleModal = () => {
    dispath(modalstate());
  }
  const handleNavigate = () => {
    navigate("/artist");
  }
  useEffect(()=>{
   window.scrollTo(0,0);
  },[])

  return <More>  
    {Modal ? <DealModal data={data[id]}></DealModal> : null }
    <section className="tagsName">
      <h2 className="tag">작업의뢰</h2>
      <h2 className="tag">{tags[id]}</h2>
      <h2 className="lasttag">{tag[id]}</h2>
    </section>
    <section className="ordermade">
      <div className="Imgbox">
        <img src={data[id].image} alt="mainImg" className="MainImg"></img>
        <div>
        <div className="orderlist">
          <h1 className="listTitle">{data[id].title}</h1>
          <ul className="listContent">
              <li className="ContentLine">
                <h2>모델명</h2>
                <h2>{data[id].name}</h2>
              </li>
              <li className="ContentLine">
                <h2>작업 비용</h2>
                <h2>{data[id].price}</h2>
              </li>
              <li className="ContentLine">
                <h2>작업 기간</h2>
                <h2>{data[id].day}</h2>
              </li>
              <li className="ContentLine">
                <h2>작업 아티스트</h2>
                <h2>{data[id].artist}</h2>
              </li>
              <li className="ContentLine">
                <h2>AS가능 유무</h2>
                <h2>{data[id].as}</h2>
              </li>
              <li className="ContentLine">
                <h2>배송비</h2>
                <h2>{data[id].deliveryPay}</h2>
              </li>
          </ul>
          <p className="TotalPrice">{data[id].totalPrice}</p>
          <div className="listFooter">
            <img src={unlike} alt="likebtn" className="likeImg"></img>
            <button className="orderBtn" onClick={()=>{handleModal()}}>의뢰하기</button>
          </div>
        </div>
          <button className="artistpage" onClick={() => {handleNavigate()}}>'{data[id].artist}'님의 다른 작품 보러가기</button>
        </div>
      </div>
      {
        dataMoreImg && dataMoreImg[id].map(item => {
          return <img src={item} alt="MoreImg" className="MoreImg"></img>
        })
      }
    </section>
    <section className="tagHeaderBox">
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
      
    </section>
  </More>
}

export default MoreItemPage;