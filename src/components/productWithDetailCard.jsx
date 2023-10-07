import React, { useState } from "react";
import { H4 } from "../helper/heading";
import { P4 } from "../helper/paragraph";
import { useNavigate } from "react-router-dom";
import ButtonComp from "../helper/button";

const ProductWithDetailCard = ({
  title,
  description,
  reverse = false,
  subTitle,
  INN = false,
  product,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  function Container({ isOpen }) {
    return (
      <div className={`productContainer ${"opened"}`}>
        <ButtonComp
          text="Read More"
          onClick={() => {
            if (product) {
              navigate(`/product/${product.replace(/\s+/g, "-")}`);
            }
          }}
        />
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          flexDirection: reverse ? "row-reverse" : null,
        }}
        className={`productWithDetailCard productCard ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{
            // borderRadius: reverse ? "0px 20px 20px 0px" : "20px 0px 0px 20px",
            borderRight: !reverse ? "1px solid #dbdbdb" : null,
            borderLeft: reverse ? "1px solid #dbdbdb" : null,
            backgroundColor: "var(--bgLight)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3
            className="helper-h3"
            style={{
              textAlign: "center",
            }}
          >
            {INN ? <span className="red-text">INN</span> : null}
            {title}
          </h3>
          <H4 text={subTitle} fontWeight="500" center />
        </div>
        <div
          style={{
            borderRadius: !reverse ? "0px 20px 20px 0px" : "20px 0px 0px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <P4
            text={description}
            style={{
              color: "#878585",
            }}
          />
        </div>
        {<Container isOpen={isHovered} />}
      </div>
    </>
  );
};

export default ProductWithDetailCard;
