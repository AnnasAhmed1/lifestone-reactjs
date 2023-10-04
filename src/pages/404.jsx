import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ButtonComp from "../helper/button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className="404-main">
      <Navbar white />

      <div
        style={{
          minHeight: "80px",
          width: "100%",
        }}
      ></div>
      <section
        className="main-section container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          minHeight: "60vh",
        }}
      >
        {/* <div
          style={{
            width: "100%",
            height: "200px",
          }}
        > */}
        <img
          className="image_404"
          src={require("../assets/404_image.png")}
          alt=""
        />
        <div>
          <ButtonComp
            text="Back to Home"
            thin
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        {/* </div> */}
      </section>
      <Footer />
    </main>
  );
};

export default ErrorPage;
