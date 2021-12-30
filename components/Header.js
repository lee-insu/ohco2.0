import Link from "next/link";
import React from "react";
import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <Link href="/">
          <div className={style.logo}>OH CO!</div>
        </Link>
        <nav className={style.nav}>
          <Link href="/list">
            <div>LIST</div>
          </Link>
          <Link href="/login">
            <div>LOGIN</div>
          </Link>
          <Link href="/mypage">
            <div>MYPAGE</div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
