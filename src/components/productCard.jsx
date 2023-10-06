import React from "react";
import { H3 } from "../helper/heading";

const ProductCard = ({ bgImage = "" }) => {
  const backgroundImageUrl = `url("${bgImage}")`;
  return (
    <div className="product-card">
      <div
        style={{
          backgroundImage: backgroundImageUrl,
        }}
      >
        <H3
          text="
        Product details Product details Product details
        "
          color="light"
          fontWeight="500"
        />
      </div>
    </div>
  );
};

export default ProductCard;
