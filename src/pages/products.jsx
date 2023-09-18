import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Tabs } from "antd";

const Products = () => {
  const items = [
    {
      key: "1",
      label: "For Fabricators",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "For Architects",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "For Homeowners",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "For Enterpreneurs",
      children: "Content of Tab Pane 3",
    },
    {
      key: "5",
      label: "For Contractors",
      children: "Content of Tab Pane 3",
    },
  ];
  const onChange = () => {};
  return (
    <main className="about-main">
      <Navbar white />
      <div
        style={{
          minHeight: "73px",
          width: "100%",
        }}
      ></div>
      <section className="main-section container">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </section>
      <Footer />
    </main>
  );
};

export default Products;
