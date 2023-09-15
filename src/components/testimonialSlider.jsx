import React, { useState } from "react";
import Slider from "react-slick";
import ProductCard from "./productCard";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import TestimonialCard from "./testimonialCard";
const TestimonialSlider = () => {
  const [activeSLide, setActiveSlide] = useState(0);
  const testimonials = [
    { image: "profile1", heading: "", text: "" },
    { image: "profile2", heading: "", text: "" },
    { image: "profile3", heading: "", text: "" },
    { image: "profile4", heading: "", text: "" },
    { image: "profile5", heading: "", text: "" },
  ];
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        style={{
          position: "absolute",
          left: "45%",
          bottom: "0",
          fontSize: "35px",
          color: "var(--light)",
          color: "var(--primary)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          borderRadius: "50%",
          zIndex: "1",
          cursor: "pointer",
        }}
        className="custom-arrow custom-prev-arrow"
        onClick={onClick}
      >
        <CaretLeftOutlined />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        style={{
          position: "absolute",
          right: "45%",
          bottom: "0",
          fontSize: "35px",
          color: "var(--light)",
          color: "var(--primary)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        className="custom-arrow custom-next-arrow"
        onClick={onClick}
      >
        <CaretRightOutlined />
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    // dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    // afterChange: (current, next) => setActiveSlide(current),
    // afterChange: current => this.setState({ activeSlide2: current })
  };
  return (
    <div className="testimonialSlider">
      <Slider {...settings}>
        {testimonials?.map((testimonial, index) => {
          return (
            <TestimonialCard
              image={testimonial.image}
              active={index === activeSLide}
            />
          );
        })}
      </Slider>
    </div>
  );
};
export default TestimonialSlider;
