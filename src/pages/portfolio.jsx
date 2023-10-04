import React from "react";
import PortfolioSlider from "../components/portfolioSlider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Portfolio = () => {
  return (
    <main>
      <Navbar white />

      <div
        style={{
          minHeight: "80px",
          width: "100%",
        }}
      ></div>
      <section className="main-section container/">
        <h1 className="container helper-h2">Our Portfolio</h1>

        <PortfolioSlider />
      </section>
      <Footer />
    </main>
  );
};

export default Portfolio;
