import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Img/anime-dance.gif";

export default function Home() {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/loggin')
    };
  return (
  <div className="App-header">
    <div className="font">ຍິນດີຕ້ອນຮັບສູ່ໜ້າຫຼໍ່ໆ</div>
    <div className="font">ນີ້ເປັນການທົດສອບ</div>
    <img src={Img1} alt="" className="gif"/>
    <div className="font" >ກົດປຸ່ມນີ້ຊະ</div>
    <button className="Bt2" onClick={handleClose}> ເຂົ້າສູ່ໂລກຄວາມເປັນຈິງ </button>
  </div>
  )
}
