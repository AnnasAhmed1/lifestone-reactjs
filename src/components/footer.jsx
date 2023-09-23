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
      to: "/products/1",
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
        <p className="helper-p5">
          <MailOutlined />
          info@lifestone.ca
        </p>
        <p className="helper-p5">
          <PhoneOutlined />
          778.883.5476
        </p>
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
      <ul
        style={{
          fontWeight: 300,
        }}
        className="helper-p5"
      >
        <li>@lifestone</li>
        <li>Privacy policy</li>
        <li>Sitemap</li>
        <li>Login</li>
      </ul>
      <div className="contact-icons">
        <Link to={"https://twitter.com/"} target="_blank">
          <TwitterOutlined />
        </Link>
        <Link to={"https://www.instagram.com/"} target="_blank">
          <InstagramOutlined />
        </Link>
        <Link to={"https://www.facebook.com/"} target="_blank">
          <FacebookOutlined />
        </Link>
        <Link to={"https://youtube.com/"} target="_blank">
          <YoutubeOutlined />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
