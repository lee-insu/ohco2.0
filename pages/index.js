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
import { GET_MUSIC_ARRAY, GET_PERFUMES_ARRAY } from "../graphQL/schema";
import SubItemList from "../components/SubItemList";
import { client } from "../service/apollo";

export default function Home({
  musicArray,
  musicLoading,
  perfumeArray,
  perfumeLoading,
}) {
  const [area, getArea] = useState("");
  const [temp, getTemp] = useState("");
  const [weather, getWeather] = useState("");
  const music = "music";
  const perfumes = "perfumes";

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
      <div className={style.sub_banner}>
        <img src="/img/music.svg" />
      </div>

      <div className={style.today_list}>
        <div className={style.sub_inner}>
          <SubItemList data={!musicLoading && musicArray} theme={music} />
        </div>
      </div>
      <div className={style.today_list}>
        <div className={style.sub_inner}>
          <SubList data={!musicLoading && musicArray} theme={music} />
        </div>
      </div>
      <div className={style.sub_banner}>
        <img src="/img/perfume.svg" />
      </div>
      <div className={style.today_list}>
        <div className={style.sub_inner}>
          <SubItemList
            data={!perfumeLoading && perfumeArray}
            theme={perfumes}
          />
        </div>
      </div>
      <div className={style.today_list}>
        <div className={style.sub_inner}>
          <SubList data={!perfumeLoading && perfumeArray} theme={perfumes} />
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const { loading: music_loading, data: music_data } = await client.query({
    query: GET_MUSIC_ARRAY,
  });

  const { loading: perfume_loading, data: perfume_data } = await client.query({
    query: GET_PERFUMES_ARRAY,
  });

  return {
    props: {
      musicArray: music_data?.musicarray,
      musicLoading: music_loading,
      perfumeArray: perfume_data?.perfumesarray,
      perfumeLoading: perfume_loading,
    },
  };
};
