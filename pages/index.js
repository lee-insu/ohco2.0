import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Banner from "../components/banner";
import Temperature from "../components/Temperature";
import CodyList from "../components/CodyList";
import handleGeoSuccess from "../service/location";
import axios from "axios";
import SubList from "../components/SubList";
import { useQuery } from "@apollo/client";
import { GET_MUSIC_ARRAY } from "../graphQL/schema";

export default function Home() {
  const [area, getArea] = useState("");
  const [temp, getTemp] = useState("");
  const [weather, getWeather] = useState("");

  const { loading, data: music_data } = useQuery(GET_MUSIC_ARRAY);

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
      <SubList data={!loading ? music_data.musicarray : false} />
    </div>
  );
}
