import Head from "next/head";
import React from "react";
import style from "../styles/Layout.module.css";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Head></Head>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
