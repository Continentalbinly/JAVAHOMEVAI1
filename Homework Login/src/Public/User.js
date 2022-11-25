import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Img/Cat.png";

export default function User() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="App-header">
      <div>Nahhhh, you join by</div>
      <div>User</div>
      <img src={Img1} alt="" className="img1" />
      <div>Account!</div>
      <div className="info">Thipphasone</div>
      <div className="info1">Chunthabundithz</div>
      <div className="text" onClick={handleClose} >Oops i want to go out</div>
    </div>
  );
}
