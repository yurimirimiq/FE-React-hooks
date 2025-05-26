import React, { useEffect, useRef, useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ validUser }) => {
  const [userid, setUserid] = useState("");
  const [userpw, setUserpw] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (message === "아이디와 비밀번호를 확인해주세요!") {
      console.log("!아이디와 비밀번호를 확인해주세요!");
    }
    else if (message === "로그인 되었습니다") {
      console.log("로그인 되었습니다");
    }
  }, [message]);


  const login = () => {
    if (userid !== validUser.id || userpw !== validUser.pw){
      setMessage("아이디와 비밀번호를 확인해주세요!")
    }
    else {
      setMessage("로그인 되었습니다!")
    }
  }

  const setID = (e) => {
    setUserid(e.target.value);
  }

  const setPW = (e) => {
    setUserpw(e.target.value)
  }
  return (
    <div>
      <input ref = {inputRef} type="text" value={userid} onChange={setID} placeholder="아이디 입력"/>
      <input ref = {inputRef} type="text" value={userpw} onChange={setPW} placeholder="비밀번호 입력"/>
      <button className="button" onClick={login}>로그인</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginForm;
