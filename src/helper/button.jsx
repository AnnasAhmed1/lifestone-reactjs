import React from "react";
import "../styles/helper.css";

const ButtonComp = ({
  text = "",
  bgColor = "primary",
  full = false,
  color = "light",
  thin = false,
  style = {},
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`helper-p3 ${
        thin ? "helper-button-thin" : "helper-button"
      } flex`}
      style={{
        backgroundColor: `var(--${bgColor})`,
        width: full ? "100%" : null,
        color: `var(--${color})`,
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default ButtonComp;
