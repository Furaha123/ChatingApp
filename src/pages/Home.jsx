import React from "react";
import SideBar from "../components/SideBar";
import Chats from "../components/Chats";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <Chats />
      </div>
    </div>
  );
};

export default Home;
