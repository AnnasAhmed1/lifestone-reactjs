import React from "react";
import Navbar from "../components/navbar";
import { H2, H5 } from "../helper/heading";
import "../styles/pages/about.css";
import { P3 } from "../helper/paragraph";
import Footer from "../components/footer";

const About = () => {
  return (
    <main className="about-main">
      <Navbar white />

      <div
        style={{
          minHeight: "73px",
          width: "100%",
        }}
      ></div>
      <section className="about-head">
        <div className="container/">
          <h5 className="helper-h5">
            Helping millions
            <br />
            grow better.
          </h5>
          <div className="image">
            <img src={require("../assets/about.webp")} alt="" />
          </div>
        </div>
        <svg
          className="wave-svg"
          viewBox="0 0 500 50"
          preserveAspectRatio="xMinYMin meet"
        >
          <path
            d="M0,50 L0,4 C95,-23 285,115 500,2 L500,50 L0,50 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </section>
      <section className="main-section container flex-responsive  about-section">
        <div>
          <H2
            text="About Lifestone"
            center
            color="primary"
            style={{
              marginBottom: "30px",
            }}
          />
          <P3
            text="At LifeStone we believe in the natural beauty of stone in all of its forms, as well as in its ability to add value to your home and life. Granite and marble make for stunning and long-lasting countertops, but did you know they can be works of art as well? LifeStone can take your vision and bring it to life in a stone sculpture or mosaic, can tackle tough architectural designs others can't, and can help you with the repair and maintenance of your existing stone surfaces. We even offer custom cut non-slip stone material for your pools and outdoor stairs. If you can imagine it, we can build it."
            fontWeight="300"
          />
        </div>
        <div className="image">
          <img src={require("../assets/about_lifestone.jpeg")} alt="" />
        </div>
      </section>
      <section className="main-section container flex-responsive flex-reverse about-section">
        <div>
          <H2
            text="Going the Extra Mile"
            center
            color="primary"
            style={{
              marginBottom: "30px",
            }}
          />
          <P3
            text="Our product is 100% green as well! We use all natural stone, and make sure to use every inch of it. Sometimes, when fabricating large pieces for a kitchen or bathroom, scraps get left behind that can't be used in other large projects. But when it comes to the art of stonework, LifeStone can turn any piece into something beautiful, meaning less waste and less in the landfill! "
            fontWeight="300"
          />
          <P3
            text="From start to finish and beyond, LifeStone keeps your needs at heart. We offer consultation services to help you decide on what you need and what will work best for your project. We fabricate everything right in our warehouse in North Vancouver, and install at your space on your schedule. We even offer restoration and maintenance products and services to help keep your stone surfaces in top condition. And if seeing us work sparks some creativity and inspiration in you, we offer speciality training on every step of the process. "
            fontWeight="300"
          />
        </div>
        <div className="image">
          <img src={require("../assets/leaf_about.jpeg")} alt="" />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
