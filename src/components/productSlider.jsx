import React from "react";
import Slider from "react-slick";
import ProductCard from "./productCard";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import product5 from "../assets/product5.jpeg";

const SimpleSlider = () => {
  const products = [
    {
      image: product1,
      text: "",
    },
    {
      image: product2,
      text: "",
    },
    {
      image: product3,
      text: "",
    },
    {
      image: product4,
      text: "",
    },
    {
      image: product5,
      text: "",
    },
  ];
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        style={{
          position: "absolute",
          left: "-50px",
          bottom: "50%",
          fontSize: "35px",
          color: "var(--light)",
          backgroundColor: "var(--primary)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          borderRadius: "50%",
        }}
        className="custom-arrow custom-prev-arrow"
        onClick={onClick}
      >
        <LeftOutlined />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        style={{
          position: "absolute",
          right: "-50px",
          bottom: "50%",
          fontSize: "35px",
          color: "var(--light)",
          backgroundColor: "var(--primary)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          borderRadius: "50%",
        }}
        className="custom-arrow custom-next-arrow"
        onClick={onClick}
      >
        <RightOutlined />
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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="productSlider">
      <Slider {...settings}>
        {products.map((product, index) => {
          return <ProductCard key={index} bgImage={product.image} />;
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
