import React, { useEffect, useState } from "react";
import style from "../styles/SubList.module.css";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

const SubList = ({ data }) => {
  const [codyData, getCodyData] = useState([]);

  useEffect(() => {
    if (data !== false) {
      getCodyData(data);
    }
  }, [data]);

  let cody = codyData[Math.floor(Math.random() * codyData.length)];
  console.log(cody);

  return (
    <div className={style.sub_list}>
      <div className={style.inner}>
        <div className={style.title}>
          <div className={style.style_title}> style</div>
          <div className={style.location}>천안시, 흐림</div>
        </div>
        <Row className={style.cody_container} type="flex">
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <div className={style.cody}></div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <div className={style.cody}></div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <div className={style.cody}></div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <div className={style.cody}></div>
          </Col>
        </Row>
        <div className={style.tag}>
          <div className={style.more}>더보기</div>
        </div>
      </div>
    </div>
  );
};

export default SubList;
