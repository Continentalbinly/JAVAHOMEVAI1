import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Img/exp1.jpg";

export default function Admin() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="App-header">
      <div className="font">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ແອັດມິນ</div>
      <img src={Img1} alt="" className="gif1" />
      <div>Adminnnnnnnnnnnn!!!!!!!!!!</div>
      <div className="info">Thipphasone</div>
      <div className="info1">Chunthabundithz</div>
      <div onClick={handleClose} className="text1">
        ກົດນີ້ເພື່ອຈະມີຄູ່ນຳເຂົາ!!
      </div>
    </div>
  );
}
