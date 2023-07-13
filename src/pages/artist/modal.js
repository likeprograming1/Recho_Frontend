import React, { useEffect, useRef } from 'react';
import Modal from "./modalstyle";
import back from "../../Image/etc/back.svg";
import RECHO from "../../Image/Header/RECHO.svg";
import { useDispatch } from 'react-redux';
import { modalstate } from '../../redux/reducer/modalSlice';
import clip from "../../Image/etc/clip.svg";

const ArtistModal = (data) => {
  const dispatch = useDispatch();
  const uploadRef = useRef();

  useEffect(()=>{
    const handleOutdelete = (event) =>{
      if(event.target.className === "modals") {
        dispatch(modalstate());
      }
    }

    window.addEventListener('click', handleOutdelete)
    return () => {
      window.removeEventListener('click', handleOutdelete)
    }
  })
  
  const handleDeal = () => {
    dispatch(modalstate());
  }
  return (
    <Modal>
      <div className="modals">
        <div className="modal">
          <button
            className="back-btn"
            onClick={() => {
              dispatch(modalstate());
            }}
          >
            <img src={back} alt="back-button"></img>
          </button>
          <div className="header">
            <img src={RECHO} alt="modal-Logo" className="Logo"></img>
            <span className="head">주문 상세 내역</span>
          </div>
          <div className="boxs">
            <ul className="box">
              <li className="list">
                <h3>작업비용</h3>
                <h3>10만원 ~ 30만원</h3>
              </li>
              <li className="list">
                <h3>작업기간</h3>
                <h3>1주 ~ 3주</h3>
              </li>
              <li className="list">
                <h3>작업 아티스트</h3>
                <h3>시계는 애플워치</h3>
              </li>
              <li className="list">
                <h3>AS가능 유무</h3>
                <h3>가능</h3>
              </li>
              <li className="Iput">
                <small>이용약관 동의 및 개인정보 수집 동의</small>
                <input type="checkbox" />
              </li>
              <li className="Iput">
                <small>파일 첨부하기</small>
                <input type="file" ref={uploadRef} className="upload" />
                <button
                  className="file"
                  onClick={() => uploadRef.current.click()}
                >
                  <img src={clip} alt="productImg" />
                </button>
              </li>
            </ul>
          </div>
          <div className="footBox">
            <div className="mun">
              <span>제품 특성 상 결제 후에는 교환/환불이 어렵습니다.</span><br></br>
              <span>결제 하시겠습니까?</span>
            </div>
            <button
              className="cashbtn"
              onClick={() => {
                handleDeal();
              }}
            >
              결제하기
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ArtistModal;