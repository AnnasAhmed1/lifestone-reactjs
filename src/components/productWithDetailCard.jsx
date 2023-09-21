import React from "react";
import { H3, H4 } from "../helper/heading";
import { P4 } from "../helper/paragraph";

const ProductWithDetailCard = ({
  title,
  description,
  reverse = false,
  subTitle,
}) => {
  return (
    <div
      style={{
        flexDirection: reverse ? "row-reverse" : null,
      }}
      className="productWithDetailCard"
    >
      <div
        style={{
          borderRadius: reverse ? "0px 20px 20px 0px" : "20px 0px 0px 20px",
          borderRight: !reverse ? "1px solid #dbdbdb" : null,
          borderLeft: reverse ? "1px solid #dbdbdb" : null,
          backgroundColor: "var(--bgLight)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <H3 text={title} center />
        <H4 text={subTitle} fontWeight="500" center />

        {/* <img
          
          src={require(`../assets/${image}`)}
          alt={title}
        /> */}
      </div>
      <div
        style={{
          borderRadius: !reverse ? "0px 20px 20px 0px" : "20px 0px 0px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <P4
          text={description}
          style={{
            color: "#878585",
          }}
        />
      </div>
    </div>
  );
};

export default ProductWithDetailCard;
