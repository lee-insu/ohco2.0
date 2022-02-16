import Head from "next/head";
import React from "react";
import Sticky from "react-sticky-el";
import style from "../styles/Layout.module.css";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Head></Head>
      <Sticky stickyStyle={{ zIndex: 1 }}>
        <Header />
      </Sticky>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
