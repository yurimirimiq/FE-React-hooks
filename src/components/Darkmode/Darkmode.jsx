import { useState } from "react";
import "./Darkmode.css";
const Darkmode = () => {
  const [Dark, setDark] = useState(true);
  const changeMode = () => {
    setDark(!Dark)
  }

  return (
    <div className={Dark ? "dark-mode": "light-mode"}>
      <h1>{Dark ? "다크 모드" : "라이트 모드"}</h1>
      <button onClick={changeMode}> {Dark ? "라이트 모드로 변경 ": "다크 모드로 변경" }</button> 
    </div>
  );
};

export default Darkmode;