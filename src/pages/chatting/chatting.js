import React from "react";
import Chat from "./style";
import close from "../../Image/chatting/close.svg";
import back from "../../Image/chatting/back.svg";
import user from "../../Image/chatting/user.svg";
import etc from "../../Image/chatting/etc.svg";
import chat from "../../Image/chatting/chat.png";
import plus from "../../Image/chatting/plus.svg";
import twitter from "../../Image/chatting/twitter.svg";
import { useDispatch } from "react-redux";
import { backstate, closestate } from "../../redux/reducer/modalSlice";

const Chatting = () => {
  const dispatch = useDispatch();

  return <Chat>
    <div className="Chatbox">
      <div className="head">
        <button className="btn" onClick={()=>{dispatch(closestate())}}>
          <img src={close} alt="closebtn" />
        </button>
        <span>1:1상담</span>
      </div>
      <div className="headbtns">
        <button className="backbtn" onClick={()=>{dispatch(backstate())}}>
          <img src={back} alt="backimg" />
        </button>
        <button className="userbtn">
          <img src={user} alt="userImg" className="userImg" />
          <span>시계는 애플워치</span>
        </button>
        <button className="etcbtn">
          <img src={etc} alt="etcbtn" />
        </button>
      </div>
      <div className="chatbox">
        <img src={chat} alt="chatimg" className="chat"/>
      </div>
      <div className="footerbox">
        <button className="plus">
          <img src={plus} alt="plus"></img>
        </button>
        <input type="text" placeholder="내용을 입력하세요." className="Content"/>
        <button className="twitter">
          <img src={twitter} alt="twitter"></img>
        </button>
      </div>
    </div>
  </Chat>
}

export default Chatting;