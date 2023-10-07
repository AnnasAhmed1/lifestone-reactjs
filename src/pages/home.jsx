import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { H1, H2, H4 } from "../helper/heading";
import { P2 } from "../helper/paragraph";
import "../styles/pages/home.css";

const Home = () => {
  const [opacity, setOpacity] = useState(1);
  const iconsData = [
    {
      image: "horus_icon_gold",
      heading: "Capture",
    },
    {
      image: "horus_match_gold",
      heading: "Match",
    },
    {
      image: "horus_quote_gold",
      heading: "EasyQuote",
    },
    {
      image: "horus_cubic_gold",
      heading: "Cubik",
    },
    {
      image: "horus_target_gold",
      heading: "Smart Target",
    },
    {
      image: "horus_icon_gold",
      heading: "Capture",
    },
    {
      image: "horus_match_gold",
      heading: "Match",
    },
    {
      image: "horus_quote_gold",
      heading: "EasyQuote",
    },
  ];
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = window.innerHeight / 2.75; // Adjust as needed
    const calculatedOpacity = 1 - Math.min(scrollPosition / maxScroll, 1);

    setOpacity(calculatedOpacity);
  };
  const products = [
    {
      title: "For Fabricators",
    },
    {
      title: "For Architects",
    },
    {
      title: "For Homeowners",
    },
    {
      title: "For Enterpreneurs",
    },
    {
      title: "For Contractors",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="home-main">
      <Navbar />
      <section
        style={{
          zIndex: "-1",
        }}
        className="home-head"
      >
        <div className="container/ main-section">
          <div style={{ opacity }} className="subheading">
            <div className="horizontal-line"></div>
            <H4
              text="Welcome To"
              color="light"
              center
              style={{
                letterSpacing: "4.6px",
              }}
            />
            <div className="horizontal-line"></div>
          </div>
          <H1
            // text="Offering High Quality, Custom Designed, and Environmentally Friendly Stone Art, Restoration Services, and Training."
            text="Lifestone"
            center
            color="light"
            style={{ opacity }}
          />
          <p
            className="helper-p2"
            style={{
              letterSpacing: "1.3px",
              marginTop: "20px",
              opacity,
              fontWeight: "500",
              textAlign: "center",
              color: "var(--light)",
            }}
          >
            Lifestone a division if <span className="red-text">INN</span>OTECH
            MANAGEMENT INC., is your dedicated destination for all things stone.
            Whether you're an architect, fabricator, homeowner, contractor, or
            enterpreneur. Our innovative solutions cater to your unique
            stone-related needs, Welcome to a world where stone meets
            innovation. Explore Lifestone today.
          </p>
        </div>
      </section>
      <section className="main-section container">
        <H2 text="Our Products" />
        <br />
        <div className="product-container">
          {products?.map((product, index) => {
            return (
              <Link
                to={`/products/${product.title.replace("For ", "")}`}
                className="home-product-card container1"
                key={index}
              >
                <P2 fontWeight="700" center text={product.title} />
              </Link>
            );
          })}
        </div>
        {/* <SimpleSlider /> */}
      </section>
      {/* <section
        style={{
          backgroundColor: "#F5F5F5",
        }}
        className="main-section"
      >
        <div className="icons-container">
          {iconsData?.map((v, i) => {
            return <IconDetail key={i} image={v.image} heading={v.heading} />;
          })}
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default Home;
