import React, { useEffect, useState } from "react";
import Modal from "./catestyle";
import back from "../../Image/etc/back.svg";
import RECHO from "../../Image/Header/RECHO.svg";
import { useDispatch } from "react-redux";
import { catestate } from "../../redux/reducer/modalSlice";
import axios from "axios";

const CateModal = (data) => {
  const dispatch = useDispatch();
  const [Nft, setNft] = useState([]);
  const [Start, setStart] = useState();
  const [End, setEnd] = useState();
  console.log(Start);
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
  useEffect(()=>{
    axios.get(
      "https://ipfs.io/ipfs/Qmbiitx7nnzv9we4nTGneEzQXgsMj1oiPosDuBoXbh32gF"
    ).then(res => {
      setNft(res.data);
      setStart(res.data.startAt.slice(0,10));
      setEnd(res.data.endAt.slice(0, 10));
    });
  },[])
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
                <h3>{Nft.price}</h3>
              </li>
              <li className="list">
                <h3>시작일</h3>
                <h3>{Start}</h3>
              </li>
              <li className="list">
                <h3>종료일</h3>
                <h3>{End}</h3>
              </li>
              <li className="list">
                <h3>아티스트</h3>
                <h3>{Nft.artistId}</h3>
              </li>
              <li className="list">
                <h3>AS가능</h3>
                <h3>{String(Nft.isAs)}</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CateModal;
