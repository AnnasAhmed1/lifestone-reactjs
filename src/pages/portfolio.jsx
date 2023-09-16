import React from "react";
import PortfolioSlider from "../components/portfolioSlider";
import Navbar from "../components/navbar";
const Portfolio = () => {
  return (
    <main>
      <Navbar white />

      <div
        style={{
          minHeight: "100px",
          width: "100%",
        }}
      ></div>
      <section className="main-section container/">
        <PortfolioSlider />
      </section>
    </main>
  );
};

export default Portfolio;
