import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import ButtonComp from "../helper/button";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import "../styles/component.css";
import { H3, H4 } from "../helper/heading";
import { Link } from "react-router-dom";

// import type { MenuProps } from 'antd';

const Navbar = ({ white = false }) => {
  const [isScrolled, setIsScrolled] = useState(white);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (!white) {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  const things = [
    { label: "MUSEUMS & ATTRACTIONS", key: "MUSEUMS & ATTRACTIONS" },
    { label: "HISTORY", key: "HISTORY" },
    { label: "FOR KIDS & FAMILIES", key: "FOR KIDS & FAMILIES" },
    { label: "SPORTS", key: "SPORTS" },
    { label: "PARKS & OUTDOORS", key: "PARKS & OUTDOORS" },
    { label: "NIGHTLIFE", key: "NIGHTLIFE" },
    { label: "MUSIC, THEATER & DANCE", key: "MUSIC, THEATER & DANCE" },
    { label: "SHOPPING", key: "SHOPPING" },
    { label: "LGBTQ+ PHILADELPHIA", key: "LGBTQ+ PHILADELPHIA" },
    { label: "TOURS", key: "TOURS" },
  ];
  const events = [
    { label: " TOP EVENTS", key: " TOP EVENTS" },
    { label: " THIS WEEK & WEEKEND", key: " THIS WEEK & WEEKEND" },
    { label: " SUMMER EVENTS & FESTS", key: " SUMMER EVENTS & FESTS" },
    { label: " THINGS TO DO IN SEPTEMBER", key: " THINGS TO DO IN SEPTEMBER" },
    { label: " FALL EVENTS & FESTS", key: " FALL EVENTS & FESTS" },
    { label: " THINGS TO DO IN OCTOBER", key: " THINGS TO DO IN OCTOBER" },
  ];
  const hotels = [
    {
      label: "VISIT PHILLY OVERNIGHT PACKAGE",
      key: "VISIT PHILLY OVERNIGHT PACKAGE",
    },
    { label: "VISIT PHILLY 3-DAY STAY", key: "VISIT PHILLY 3-DAY STAY" },
    { label: "HOTELS IN PHILADELPHIA", key: "HOTELS IN PHILADELPHIA" },
    { label: "DEALS & PACKAGES", key: "DEALS & PACKAGES" },
  ];
  const trip = [
    { label: "GETTING HERE", key: "GETTING HERE" },
    { label: "GETTING AROUND", key: "GETTING AROUND" },
    { label: "MAPS & DIRECTIONS", key: "MAPS & DIRECTIONS" },
    { label: "ACCESSIBLE PHILADELPHIA", key: "ACCESSIBLE PHILADELPHIA" },
    {
      label: "INDEPENDENCE VISITOR CENTER",
      key: "INDEPENDENCE VISITOR CENTER",
    },
    { label: "PHILADELPHIA NEIGHBORHOODS", key: "PHILADELPHIA NEIGHBORHOODS" },
  ];
  const grit = [
    { label: "LOVE + GRIT PODCAST", key: "LOVE + GRIT PODCAST" },
    {
      label: "BLACK- AND BROWN-OWNED BUSINESSES",
      key: "BLACK- AND BROWN-OWNED BUSINESSES",
    },
    {
      label: "VISIT PHILADELPHIA: BLACK GREEK EDITION",
      key: "VISIT PHILADELPHIA: BLACK GREEK EDITION",
    },
  ];

  const [navDetail, setNavDetail] = useState([]);
  const handleNavDetail = (heading, headingData) => {
    // setNavDetail({
    //   heading,
    //   headingData,
    // });
    // if (heading === navDetail.heading && open === true) {
    //   setOpen(false);
    // } else {
    //   setOpen(false);
    //   setOpen(true);
    // }
    console.log(open);
  };

  const navs = [
    {
      label: "HOME",
      to: "/",
      navDetail: false,
    },
    {
      label: "ABOUT US",
      to: "/about",
      navDetail: false,
    },
    {
      label: "PORTFOLIO",
      to: "/portfolio",
      navDetail: false,
    },
    {
      label: "CONTACT US",
      to: "/contact",
      navDetail: false,
    },
    {
      label: "FAQ",
      to: "/faq",
      navDetail: false,
    },
  ];
  return (
    <>
      <nav className={`navbar ${!isScrolled ? "white-nav" : null}`}>
        <ul>
          <li>Media</li>
          <li className="circle"></li>
          <li> Meetings</li>
          <li className="circle"></li>
          <li>visitPA.com</li>
          <li className="circle"></li>
          <li>Hospitality Jobs</li>
        </ul>
        <div className="navs-container">
          <h1>Lifesstonic</h1>
          <ul>
            {navs?.map((nav, index) => {
              return (
                <li
                  key={index}
                  className="helper-p5"
                  onClick={() => {
                    handleNavDetail("THINGS TO DO", things);
                  }}
                >
                  <Link to={nav.to}>{nav.label}</Link>
                  {/* <CaretDownOutlined /> */}
                </li>
              );
            })}
          </ul>
          <ButtonComp text="UWISHUNU" />
          <button className="icon-button">
            <SearchOutlined />
          </button>
        </div>

        <div className={`nav-detail main-section ${open ? "visible" : null}`}>
          <div>
            <H4 text={navDetail.heading} />
            {navDetail.headingData?.map((v, i) => {
              return (
                <p key={i} className="helper-p3">
                  {v.label}
                </p>
              );
            })}
          </div>
          <div>
            <H4 text="Top Picks" />
            <div className="nav-picks">
              <div className="nav-picks-container">
                {" "}
                <H3
                  text="
       Write some Text here
        "
                  color="light"
                  fontWeight="500"
                />
              </div>
              <div className="nav-picks-container">
                {" "}
                <H3
                  text="
       Write some Text here
        "
                  color="light"
                  fontWeight="500"
                />
              </div>
              <div className="nav-picks-container">
                {" "}
                <H3
                  text="
       Write some Text here
        "
                  color="light"
                  fontWeight="500"
                />
              </div>
              <div className="nav-picks-container">
                {" "}
                <H3
                  text="
       Write some Text here
        "
                  color="light"
                  fontWeight="500"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
