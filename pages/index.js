import { Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css";
import style from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Banner from "../components/banner";
import Temperature from "../components/Temperature";
import CodyList from "../components/CodyList";
import handleGeoSuccess from "../service/location";
import axios from "axios";

export default function Home() {
  const [area, getArea] = useState("");
  const [temp, getTemp] = useState("");
  const [weather, getWeather] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeo);

    function handleGeo(position) {
      try {
        handleGeoSuccess(position).then(
          axios.spread((res1, res2) => {
            getArea(res1.data.documents[0].region_2depth_name);
            getTemp(Math.round(res2.data.main.temp) - 273);
            getWeather(res2.data.weather[0].main);
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <Banner />
      </div>
      <div className={style.today_list}>
        <div className={style.inner}>
          <div className={style.title}>
            <div className={style.style_title}>today style</div>
            <div className={style.location}>
              <Temperature temp={temp} weather={weather} area={area} />
            </div>
          </div>
          <CodyList temp={temp} />
        </div>
      </div>
      <div className={style.sub_banner}></div>
      <div className={style.tomorrow_list}>
        <div className={style.inner}>
          <div className={style.title}>
            <div className={style.style_title}>weekend style</div>
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
