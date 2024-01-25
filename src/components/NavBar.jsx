import React, { useContext } from "react";
import Lawyer from "./../images/lawyer1.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span className="name">{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
    </div>
  );
};

export default NavBar;
