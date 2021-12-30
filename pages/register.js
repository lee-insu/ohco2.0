import React from "react";
import style from "../styles/Register.module.css";

const register = () => {
  return (
    <div className={style.container}>
      <div className={style.banner}></div>
      <div className={style.inner}>
        <div className={style.title_container}>
          <div className={style.logo}>회원가입</div>
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
          <div className={style.text}>닉네임</div>
          <input className={style.input} type="text" name="nickname" required />
          <input className={style.register} type="submit" value="회원가입" />
        </form>
      </div>
    </div>
  );
};

export default register;
