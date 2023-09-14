import React from "react";
import { H3 } from "../helper/heading";
import { PlusOutlined } from "@ant-design/icons";

const IconDetail = ({ image = "", heading = "" }) => {
  return (
    <div className="icon-detail">
      <div>
        <img src={require(`../assets/${image}.png`)} alt="" />
      </div> 
      <H3 text={heading} />
      <PlusOutlined />
    </div>
  );
};

export default IconDetail;
