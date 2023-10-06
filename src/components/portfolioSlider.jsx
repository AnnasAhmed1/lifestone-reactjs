import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "../styles/pages/portfolio.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";

function PortfolioSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const portfolioData = [
    {
      title: "",
      image1: "image_1_1",
      image2: "image_1_2",
      image3: "image_1_3",
    },
    {
      title: "",
      image1: "image_2_1",
      image2: "image_2_2",
      image3: "image_2_3",
    },
    {
      title: "",
      image1: "image_3_1",
      image2: "image_3_2",
      image3: "image_3_3",
    },
    {
      title: "",
      image1: "image_2_1",
      image2: "image_2_2",
      image3: "image_2_3",
    },
  ];
  const swiperSlide = useSwiperSlide();
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      onActiveIndexChange={(e) => {
        setActiveSlide(e.realIndex);
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {portfolioData?.map((portfolio, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className={`portfolio_slide ${(activeSlide = index
                ? "active_slide"
                : null)}`}
            >
              <img
                src={require(`../assets/portfolio_images/${portfolio.image3}.jpeg`)}
                alt=""
                className="portfolio_image3"
              />
              <img
                src={require(`../assets/portfolio_images/${portfolio.image2}.jpeg`)}
                alt=""
                className="portfolio_image2"
              />
              <img
                src={require(`../assets/portfolio_images/${portfolio.image1}.jpeg`)}
                alt=""
                className="portfolio_image1"
              />
            </div>
          </SwiperSlide>
        );
      })}

      <div className="slider-controller">
        <div className="swiper-button-prev slider-arrow slider-prev-arrow">
          <CaretLeftOutlined />
        </div>
        <div className="swiper-button-next slider-arrow slider-next-arrow">
          <CaretRightOutlined />
        </div>
        <div className="pagination"></div>
      </div>
    </Swiper>
  );
}

export default PortfolioSlider;
