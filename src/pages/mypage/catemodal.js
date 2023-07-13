import React, { useEffect } from "react";
import Modal from "./catestyle";
import back from "../../Image/etc/back.svg";
import RECHO from "../../Image/Header/RECHO.svg";
import { useDispatch } from "react-redux";
import { catestate } from "../../redux/reducer/modalSlice";

const CateModal = (data) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOutdelete = (event) => {
      if (event.target.className === "modals") {
        dispatch(catestate());
      }
    };

    window.addEventListener("click", handleOutdelete);
    return () => {
      window.removeEventListener("click", handleOutdelete);
    };
  });

  const handleDeal = () => {
    dispatch(catestate());
  };
  return (
    <Modal>
      <div className="modals">
        <div className="modal">
          <button
            className="back-btn"
            onClick={() => {
              handleDeal();
            }}
          >
            <img src={back} alt="back-button"></img>
          </button>
          <div className="header">
            <img src={RECHO} alt="modal-Logo" className="Logo"></img>
            <span className="head">보증서</span>
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
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CateModal;
