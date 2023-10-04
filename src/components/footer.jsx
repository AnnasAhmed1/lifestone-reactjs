import React from "react";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
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
  return (
    <footer className="footer main-section">
      <div>
        <a className="helper-p5" href="mailto:info@lifestone.ca">
          <MailOutlined />
          info@lifestone.ca
        </a>
        <Link className="helper-p5" to="tel:+920000000000">
          <PhoneOutlined />
          778.883.5476
        </Link>
      </div>
      <ul>
        {navs?.map((nav, index) => {
          return (
            <li key={index} className="helper-p5">
              <Link to={nav.to}>{nav.label}</Link>
              {/* <CaretDownOutlined /> */}
            </li>
          );
        })}
      </ul>
      {/* <ul
        style={{
          fontWeight: 300,
        }}
        className="helper-p5"
      >
        <li>@lifestone</li>
        <li>Privacy policy</li>
        <li>Sitemap</li>
        <li>Login</li>
      </ul> */}
      <div className="contact-icons">
        <Link to={"https://twitter.com/LifestoneX"} target="_blank">
          <TwitterOutlined />
        </Link>
        <Link
          to={"https://www.instagram.com/lifestoneplatform/?hl=en"}
          target="_blank"
        >
          <InstagramOutlined />
        </Link>
        <Link
          to={"https://www.facebook.com/profile.php?id=61551733833947"}
          target="_blank"
        >
          <FacebookOutlined />
        </Link>
        <Link
          to={"https://www.youtube.com/channel/UCX_EYu2YGbZM6HZN6GXy-nQ"}
          target="_blank"
        >
          <YoutubeOutlined />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
