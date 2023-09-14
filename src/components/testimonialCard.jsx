import React from "react";
import { H4 } from "../helper/heading";
import { P3 } from "../helper/paragraph";

const TestimonialCard = ({ image = "", active = false }) => {
  return (
    <div
      className={`testimonial-card ${
        active ? "testimonial-card-active" : null
      }`}
    >
      <div className="image">
        <img src={require(`../assets/${image}.png`)} alt="" />
      </div>
      {active ? (
        <>
          <H4 text="Lisa Redfern" center />
          <P3
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, voluptatibus minus nulla quaerat esse ut."
            center
          />
        </>
      ) : null}
    </div>
  );
};

export default TestimonialCard;
