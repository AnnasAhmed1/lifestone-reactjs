import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonComp from "../helper/button";
import "../styles/component.css";

const Navbar = ({ white = false, style = {} }) => {
  const [isScrolled, setIsScrolled] = useState(white);
  const [active, setActive] = useState("home");
  const [inputActive, setInputActive] = useState(false);
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
      label: "PRODUCTS",
      to: "/products/Fabricators",
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
  const items = [];
  navs.map((v, i) => {
    items.push({ key: i, label: <Link to={v.to}>{v.label}</Link> });
  });
  const navigate = useNavigate();
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();
  return (
    <>
      <nav
        className={`navbar ${!isScrolled || mobileNav ? "white-nav" : null}`}
        style={style}
      >
        <div className="navs-container">
          <div
            style={{
              flex: "1",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <h1
              style={{
                fontSize: "32px",
              }}
            >
              Lifestone
            </h1>
            <p
              style={{
                fontSize: "12px",
                color: !isScrolled ? "#d7d7d7" : "#555555",
                whiteSpace: "nowrap",
              }}
            >
              <span className="red-text">INN</span>OTECH MANAGEMENT INC.
            </p>
          </div>
          <ul className="hide-tablet">
            {navs?.map((nav, index) => {
              return (
                <li
                  key={index}
                  className="helper-p5"
                  onClick={() => {}}
                  // onClick={() => {
                  //   handleNavDetail("THINGS TO DO", things);
                  // }}
                >
                  <Link
                    style={{
                      whiteSpace: "nowrap",
                      color:
                        location.pathname.includes("product") &&
                        nav.to.includes("product")
                          ? "var(--primary)"
                          : location.pathname === nav.to
                          ? "var(--primary)"
                          : null,
                    }}
                    to={nav.to}
                  >
                    {nav.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <>
            <ButtonComp
              text="Login"
              onClick={() => {
                navigate("/login");
              }}
            />
            {/* <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="navbar-form"
            >
              <input
                type="text"
                placeholder="Search"
                placeholderColor="#ffffff"
                className={`${inputActive ? "input-active" : null}`}
              />
              <button
                onClick={() => {
                  setInputActive(!inputActive);
                }}
                className="icon-button"
              >
                <SearchOutlined />
              </button>
            </form> */}

            <div
              className={`active-mobile-nav ${
                mobileNav ? "active-mobile-nav-activated" : null
              }`}
            >
              <div>
                <h1
                  style={{
                    fontSize: "32px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/");
                    setMobileNav(false);
                  }}
                >
                  Lifestone
                </h1>
                <p
                  style={{
                    fontSize: "12px",
                    color: !isScrolled ? "#d7d7d7" : "#555555",
                  }}
                >
                  <span className="red-text">INN</span>OTECH MANAGEMENT INC.
                </p>
                <button
                  style={{
                    color: "#ffffff",
                    fontSize: "24px",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                  }}
                  onClick={() => {
                    setMobileNav(false);
                  }}
                >
                  <CloseOutlined />
                </button>
              </div>
              <ul className="">
                {navs?.map((nav, index) => {
                  return (
                    <li
                      key={index}
                      className="helper-p5"
                      onClick={() => {
                        handleNavDetail("THINGS TO DO", things);
                        setMobileNav(false);
                      }}
                    >
                      <Link to={nav.to}>{nav.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button
              className="show-tablet"
              onClick={() => {
                setMobileNav(true);
              }}
            >
              <MenuOutlined
                style={{
                  fontSize: "20px",
                }}
              />
            </button>
            {/* <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
            className="showmobil"
          >
            <button className="show-tablet">
              <MenuOutlined
                style={{
                  fontSize: "20px",
                }}
              />
            </button>
          </Dropdown> */}
          </>
        </div>

        {/* <div className={`nav-detail main-section ${open ? "visible" : null}`}>
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
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
