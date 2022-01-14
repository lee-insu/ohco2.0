import { Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css";
import style from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Banner from "../components/banner";
import { gql, useQuery } from "@apollo/client";
import Axios from "axios";
import { GET_CODYLIST } from "../graphQL/queries";

export default function Home() {
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  const [cody, getCody] = useState([]);

  const { loading, error, data } = useQuery(GET_CODYLIST);

  useEffect(() => {
    if (data) {
      getCody(data.codylist);
    }
    navigator.geolocation.getCurrentPosition(handleGeo);

    function handleGeo(position) {
      try {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const weatherApi = "c9f5e0525d1d4f8c6288f490d689c397";

        if ((lat, lon)) {
          const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi}`;
          Axios.get(link).then((res) => {
            setTemp(Math.round(res.data.main.temp) - 273);
            setWeather(res.data.weather[0].main);
            setLocation(res.data.name);
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, [data]);

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
              {
                (location,
                weather ? (
                  <>
                    {location}, {weather}
                  </>
                ) : (
                  <>날씨를 불러오고 있습니다..</>
                ))
              }
            </div>
          </div>

          <Row className={style.cody_container} type="flex">
            {cody ? (
              cody.map((img) => (
                <Col key={img.id} xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className={style.cody}>
                    <img className={style.img} src={img.img_url} />
                  </div>
                </Col>
              ))
            ) : (
              <div>불러오는 중..</div>
            )}
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
