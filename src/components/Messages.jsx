import React, { useContext } from "react";
import ChatImage from "./../images/lawyer6.jpg";
import ChatImage2 from "./../images/lawyer8.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/UserContext";
const Messages = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div
      className={`message ${message.senderId == currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Messages;
