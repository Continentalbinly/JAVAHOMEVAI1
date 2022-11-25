import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Img/McWf0qB.jpg";

function App() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  const [name, setName] = React.useState();
  const [pass, setPass] = React.useState();

  const sendname = (e) => {
    setName(e.target.value);
    
  };

  const sendpass = (p) => {
    setPass(p.target.value);
  };

  const login = () => {
    if (name === "admin" && pass === "admin") {
      alert("ຍິນດີນຳ ທ່ານໄດ້ແທງທະລຸຫົວໃຈຄົນທີ່ທ່ານມັກແລ້ວ!")
      navigate("/admin");
      return false;
    } else if (name === "user" && pass === "user") {
      alert("ຍິນດີນຳ ທ່ານໄດ້ເຂົ້າມາເປັນສະມາຊິກ FriendZone ຄົນທີ່ 999 ແລ້ວ!")
      navigate("/user");
      return false;
    } else {
      alert("ຂໍໂທດຫຼາຍໆ ສຸດທ້າຍກະເຂົ້າໄປໃນໃຈເຂົາບໍ່ໄດ້ ! ");
    }
  };

  return (
    <div className="App-header">
      <div className="font" >ສີແດງເຂົາບໍ່ຮັກ ສີຟ້າກະຄືກັນ</div>
      <img src={Img1} alt="" className="img" />
      <input className="input" type="email" placeholder="ກະລຸນາໃສ່ໃຫ້ຖືກ" onChange={sendname}></input>
      <input className="input" type="password" placeholder="ກະລຸນາຢ່າເດົາ" onChange={sendpass}></input>
      <button className="Bt2" onClick={login} > ຫາກະແຈໄດ້ແລ້ວ </button>
      <div
        style={{ fontSize: "18px", paddingTop: "10px", cursor: "pointer" }}
        onClick={handleClose} className="text"
      >
        ອ້າວກັບຈັ່ງໃດ???
      </div>
    </div>
  );
}
export default App;
