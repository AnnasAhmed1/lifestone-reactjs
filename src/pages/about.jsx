import React from "react";
import Navbar from "../components/navbar";
import { H1, H2, H3, H4, H5 } from "../helper/heading";
import "../styles/pages/about.css";
import { P3 } from "../helper/paragraph";
import Footer from "../components/footer";
import TestimonialSlider from "../components/testimonialSlider";

const About = () => {
  const aboutContent = [
    {
      heading: "A Journey Through Stone",
      detail:
        "Welcome to Lifestone, where our journey with stone has spanned over two decades, and it continues with a passion for innovation and excellence.",
    },
    {
      heading: "Our Founder's Stone Odyssey",
      detail:
        "Our founder, deeply entrenched in the stone industry since the year 2000, embarked on a remarkable journey that has embraced every facet of this timeless craft. With a strong background in natural stone processing technology, our founder honed their skills with renowned German company AKEMI GMB.",
    },
    {
      heading: "Pioneering the Stone Revolution",
      detail:
        "At Lifestone, we've always had our sights set on the horizon, envisioning the revolutionization and adaptation of stone craftsmanship to modern industry standards. Our goal is to meet the ever-evolving interests of stone enthusiasts while ensuring sustainability, cost-effectiveness, and a profitable lifecycle—all without compromising quality.",
    },
    {
      heading: "A Fusion of Expertise",
      detail:
        "Our founder brings a unique blend of expertise to the table. With a foundation in management knowledge, computer science, and innovative solutions, coupled with over 22 years of hands-on field experience at every level of the stone industry, we are poised to make a significant impact.",
    },
    {
      heading: "Our Commitment to Stone Lovers",
      detail:
        "Lifestone Platform is our means of sharing this extensive journey with fellow stone lovers. We are dedicated to enhancing every aspect of the stone business, optimizing processes, and breathing new life into the stone lifecycle.",
    },
    {
      heading: "A World of Possibilities",
      detail:
        "At Lifestone, every conceivable angle of the stone business is our canvas for improvement. We strive to create a world where the stone industry thrives, where artistry meets innovation, and where every stone tells a story of craftsmanship, quality, and sustainability",
    },
    {
      detail:
        "Join us on this incredible journey through stone. Explore Lifestone Platform and discover how we're reshaping the future of the stone industry—one innovative idea at a time.",
    },
  ];
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
        <div className="container/ flex-responsive">
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

      <section className="main-section flex-responsive/ container about-section">
        <H2
          text="About Lifestone"
          center
          color="primary"
          style={{
            marginBottom: "30px",
          }}
        />
        {aboutContent?.map((content, index) => {
          return (
            <>
              <div
                key={index}
                className="subheading"
                style={{
                  justifyContent: "start",
                }}
              >
                <H4 text={content.heading} />
                {content.heading && (
                  <div className="horizontal-line-black1"></div>
                )}
              </div>
              <P3 text={content.detail} fontWeight="300" />
            </>
          );
        })}
        {/* <div
            className="subheading"
            style={{
              justifyContent: "start",
            }}
          >
            <H4 text="A Journey Through Stone" />
            <div className="horizontal-line-black"></div>
          </div>
          <P3
            text="Welcome to Lifestone, where our journey with stone has spanned over two decades, and it continues with a passion for innovation and excellence."
            fontWeight="300"
          />
          <div
            className="subheading"
            style={{
              justifyContent: "start",
            }}
          >
            <H4 text="Our Founder's Stone Odyssey" />
            <div className="horizontal-line-black"></div>
          </div>

          <P3
            text="Our founder, deeply entrenched in the stone industry since the year 2000, embarked on a remarkable journey that has embraced every facet of this timeless craft. With a strong background in natural stone processing technology, our founder honed their skills with renowned German company AKEMI GMB."
            fontWeight="300"
          /> */}
      </section>
      <section
        style={{
          backgroundColor: "#F5F5F5",
        }}
        className="main-section"
      >
        <div className="container">
          <H2 text="What Clients Say" />
          <br />
          <TestimonialSlider />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
