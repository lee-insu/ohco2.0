import React from "react";
import style from "../styles/Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([EffectFade, Navigation, Pagination]);

const Banner = () => {
  return (
    <div className={style.container}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ backgroundColor: "#f9f9f9" }}
            className={style.img}
            src="/img/banner_1.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ backgroundColor: "#f9f9f9" }}
            className={style.img}
            src="/img/banner_2.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ backgroundColor: "#f9f9f9" }}
            className={style.img}
            src="/img/banner_3.svg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
