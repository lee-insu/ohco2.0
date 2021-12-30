import { Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.banner}></div>
      <div className={style.today_list}>
        <div className={style.inner}>
          <div className={style.title}>
            <div className={style.style_title}>today style</div>
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
      <div className={style.sub_banner}></div>
      <div className={style.tomorrow_list}>
        <div className={style.inner}>
          <div className={style.title}>
            <div className={style.style_title}>tomorrow style</div>
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
    </div>
  );
}
