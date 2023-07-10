import React from "react";
import close from "../../Image/chatting/close.svg";
import user from "../../Image/chatting/user.svg";
import etc from "../../Image/chatting/etc.svg";
import ListBox from "./liststyle";
import { useDispatch } from "react-redux";
import { closestate } from "../../redux/reducer/modalSlice";

const List = () => {
  const dispatch = useDispatch();

  return <ListBox>
    <div className="Chatbox">
      <div className="head">
        <button className="btn" onClick={()=>dispatch(closestate())}>
          <img src={close} alt="closebtn" />
        </button>
        <span>1:1상담</span>
      </div>
      <div className="headbtns">
        <button className="userbtn">
          <span>상담 내용 목록</span>
        </button>
        <button className="etcbtn">
          <img src={etc} alt="etcbtn" />
        </button>
      </div>
      <ul className="ContentBox">
        <li className="Contents">
          <div className="artist">아티스트</div>
          <div className="today">최근 날짜</div> 
          <div className="day">날짜</div>
        </li>
        <li className="Contents">
          <div className="artists">
            <img src={user} alt="artistImg" className="artistImg"/>
            <span className="artistname">시계는애플워치</span>
          </div>
          <div className="todays">대한사람 대한으로 길이 보전하세</div> 
          <div className="days">날짜</div>
        </li>
        <li className="Contents">
          <div className="artists">
            <img src={user} alt="artistImg" className="artistImg"/>
            <span className="artistname">시계는애플워치</span>
          </div>
          <div className="todays">대한사람 대한으로 길이 보전하세</div> 
          <div className="days">날짜</div>
        </li>
        <li className="Contents">
          <div className="artists">
            <img src={user} alt="artistImg" className="artistImg"/>
            <span className="artistname">시계는애플워치</span>
          </div>
          <div className="todays">대한사람 대한으로 길이 보전하세</div> 
          <div className="days">날짜</div>
        </li>
        <li className="Contents">
          <div className="artists">
            <img src={user} alt="artistImg" className="artistImg"/>
            <span className="artistname">시계는애플워치</span>
          </div>
          <div className="todays">대한사람 대한으로 길이 보전하세</div> 
          <div className="days">날짜</div>
        </li>
        <li className="Contents">
          <div className="artists">
            <img src={user} alt="artistImg" className="artistImg"/>
            <span className="artistname">시계는애플워치</span>
          </div>
          <div className="todays">대한사람 대한으로 길이 보전하세</div> 
          <div className="days">날짜</div>
        </li>
        <li className="Contents">
          <div className="artists">
            <img src={user} alt="artistImg" className="artistImg"/>
            <span className="artistname">시계는애플워치</span>
          </div>
          <div className="todays">대한사람 대한으로 길이 보전하세</div> 
          <div className="days">날짜</div>
        </li>
      </ul>
    </div>
  </ListBox>
}

export default List;