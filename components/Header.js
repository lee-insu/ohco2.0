import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { authService } from "../service/firebase";
import style from "../styles/Header.module.css";
import * as userAction from "../store/modules/user";

const Header = () => {
  const displayName = useSelector((state) => state.displayName);

  const logout = () => {
    authService.signOut();
    window.location.replace("/");
  };

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
          {displayName.isLogin ? (
            <>
              <div onClick={logout}>LOGOUT</div>
              <Link href="/mypage">
                <div>MYPAGE</div>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <div>LOGIN</div>
              </Link>
              <Link href="/login">
                <div>MYPAGE</div>
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
