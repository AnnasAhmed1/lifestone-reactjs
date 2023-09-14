import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const PortfolioSlider = () => {
  return (
    <Swiper
      // spaceBetween={50}
      // slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      EffectCoverflow

    >
      <SwiperSlide>
        <img src={require("../assets/home_bg.jpeg")} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("../assets/home_bg.jpeg")} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("../assets/home_bg.jpeg")} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("../assets/home_bg.jpeg")} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default PortfolioSlider;
