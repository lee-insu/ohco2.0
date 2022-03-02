import { Drawer, Menu } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useSelector } from "react-redux";
import { authService } from "../service/firebase";
import style from "../styles/Header.module.css";

const Header = () => {
  const displayName = useSelector((state) => state.displayName);

  const logout = () => {
    authService.signOut();
    window.location.replace("/");
  };

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(!visible);
  };

  return (
    <div className={style.container}>
      <BrowserView>
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
      </BrowserView>

      <MobileView>
        <div className={style.container}>
          <Link href="/">
            <div className={style.logo}>OH CO!</div>
          </Link>
          <button className={style.toggle} onClick={showDrawer}>
            <img src="/icon/menu.svg" />
          </button>

          <Drawer
            placement="right"
            onClose={onClose}
            visible={visible}
            destroyOnClose="true"
            width="300"
            closeIcon={<img className={style.close} src="/icon/close.svg" />}
          >
            <Menu mode="vertical">
              <Menu.Item key="list">
                <Link href="/list">
                  <div className={style.menu_btn} onClick={onClose}>
                    LIST
                  </div>
                </Link>
              </Menu.Item>
              {displayName.isLogin ? (
                <>
                  <Menu.Item key="mypage">
                    <Link href="/mypage">
                      <div className={style.menu_btn} onClick={onClose}>
                        MYPAGE
                      </div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="logout">
                    <div onClick={logout} className={style.logout}>
                      LOGOUT
                    </div>
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item key="mypage">
                    <Link href="/login">
                      <div className={style.menu_btn} onClick={onClose}>
                        MYPAGE
                      </div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="login">
                    <Link href="/login">
                      <div className={style.menu_btn} onClick={onClose}>
                        LOGIN
                      </div>
                    </Link>
                  </Menu.Item>
                </>
              )}
            </Menu>
          </Drawer>
        </div>
      </MobileView>
    </div>
  );
};

export default Header;
