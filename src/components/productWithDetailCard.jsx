import React from "react";
import { H3 } from "../helper/heading";
import { P4 } from "../helper/paragraph";

const ProductWithDetailCard = ({
  image,
  title,
  description,
  reverse = false,
}) => {
  return (
    <div
      style={{
        flexDirection: reverse ? "row-reverse" : null,
      }}
      className="productWithDetailCard"
    >
      <div>
        <img
          style={{
            borderRadius: reverse ? "0px 20px 20px 0px" : "20px 0px 0px 20px",
          }}
          src={require(`../assets/${image}`)}
          alt={title}
        />
      </div>
      <div
        style={{
          borderRadius: !reverse ? "0px 20px 20px 0px" : "20px 0px 0px 20px",
        }}
      >
        <H3 text={title} />
        <P4
          color="textLight"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut? Aliquam doloremque perspiciatis tempore necessitatibus assumenda! Est atque hic natus, iusto molestiae, dolore quos, doloribus quis quaerat ratione quibusdam deserunt delectus vel ad ducimus optio culpa libero. Ullam deserunt enim provident."
        />
      </div>
    </div>
  );
};

export default ProductWithDetailCard;
