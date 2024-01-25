import React, { useState } from "react";
import AddAvatar from "../images/addAvatar.png";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      navigate("/");
    } catch (err) {
      console.log(err)
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chating App</span>
        <span className="title">Login in</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Login</button>
        </form>
        <p>
          You have no account ?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
