import React, { useContext, useEffect, useState } from "react";
import Messages from "./Messages";
import { ChatContext } from "../context/UserContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Messagess = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        if (doc.exists()) {
          setMessages(doc.data().messages);
        } else {
          setMessages([]);
        }
      });

      return () => {
        unSub();
      };
    }
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Messages message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messagess;
