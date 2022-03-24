import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import { BrowserView, MobileView } from "react-device-detect";
import style from "../styles/Search.module.css";
import { useDispatch } from "react-redux";
import * as searchAction from "../store/modules/search";
import { useRouter } from "next/router";

const Search = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [result, getResult] = useState(null);
  const [preview, setPreview] = useState([]);
  const router = useRouter();

  const dispatch = useDispatch();

  const searchShow = () => {
    setSearchActive(!searchActive);
  };

  const searchClose = () => {
    setSearchActive(!searchActive);
  };

  const onChange = (e) => {
    const target = e.target.value;
    getResult(target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchAction.getSearch(result));
    searchClose();
    router.push("/search");
  };

  return (
    <div>
      <img
        className={style.search}
        onClick={searchShow}
        src="/icon/icons8-search.svg"
      />

      <Drawer
        placement="top"
        onClose={searchClose}
        visible={searchActive}
        destroyOnClose="true"
        closeIcon=""
        height={Array.isArray(preview) && preview.length === 0 ? "125" : "auto"}
      >
        <form onSubmit={onSubmit} className={style.container}>
          <input
            className={style.input}
            type="text"
            onChange={onChange}
            placeholder="이름, 계절, 스타일 등.."
          />
          <div onClick={searchClose} className={style.close}>
            취소
          </div>
        </form>

        {Array.isArray(preview) && preview.length === 0 ? null : <div>hh</div>}
      </Drawer>
    </div>
  );
};

export default Search;
