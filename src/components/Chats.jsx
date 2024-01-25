import React, { useContext } from "react";
import Input from "./Input";
import { IoMdVideocam } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import Messagess from "./Messagess";
import { ChatContext } from "../context/UserContext";
const Chats = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <IoMdVideocam size={20} color="lightgray" />
          <FaUser size={20} color="lightgray" />
          <IoIosMore size={20} color="lightgray" />
        </div>
      </div>
      <Messagess />
      <Input />
    </div>
  );
};

export default Chats;
