import Link from "next/link";
import React from "react";
import style from "../styles/Login.module.css";
const login = () => {
  return (
    <div className={style.container}>
      <div className={style.banner}></div>
      <div className={style.inner}>
        <div className={style.title_container}>
          <div className={style.logo}>OH CO!</div>
          <div className={style.sub}>오늘의 날씨와 어울리는 코디</div>
        </div>
        <form className={style.form}>
          <div className={style.text}>이메일 주소</div>
          <input
            className={style.input}
            type="text"
            name="email"
            placeholder="이메일을 적어주세요"
          />

          <div className={style.text}>비밀번호</div>
          <input
            className={style.input}
            type="password"
            name="password"
            required
          />
          <div className={style.find_password}>비밀번호를 잊으셨나요?</div>
          <input className={style.login} type="submit" value="로그인" />
        </form>
        <Link href="/register">
          <div className={style.register_container}>
            <div className={style.register}>회원가입 하기</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default login;
