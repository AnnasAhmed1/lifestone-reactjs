import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/pages/product.css";
import { Tabs } from "antd";
import ProductWithDetailCard from "../components/productWithDetailCard";

const Products = () => {
  const items = [
    {
      key: "1",
      label: "For Fabricators",
      children: (
        <section>
          <ProductWithDetailCard
            title={"Fabricators Product 1"}
            image={"product3.jpeg"}
          />
          <ProductWithDetailCard
            title={"Fabricators Product 2"}
            image={"product5.jpeg"}
            reverse
          />
        </section>
      ),
    },
    {
      key: "2",
      label: "For Architects",
      children: (
        <section>
          <ProductWithDetailCard
            title={"Architects Product 1"}
            image={"product1.jpeg"}
          />
          <ProductWithDetailCard
            title={"Architects Product 2"}
            image={"product2.jpeg"}
            reverse
          />
        </section>
      ),
    },
    {
      key: "3",
      label: "For Homeowners",
      children: (
        <section>
          <ProductWithDetailCard
            title={"Homeowners Product 1"}
            image={"product3.jpeg"}
          />
          <ProductWithDetailCard
            title={"Homeowners Product 2"}
            image={"product4.jpeg"}
            reverse
          />
        </section>
      ),
    },
    {
      key: "4",
      label: "For Enterpreneurs",
      children: (
        <section>
          <ProductWithDetailCard
            title={"Enterpreneurs Product 1"}
            image={"product5.jpeg"}
          />
          <ProductWithDetailCard
            title={"Enterpreneurs Product 2"}
            image={"product1.jpeg"}
            reverse
          />
        </section>
      ),
    },
    {
      key: "5",
      label: "For Contractors",
      children: (
        <section>
          <ProductWithDetailCard
            title={"Contractors Product 1"}
            image={"product2.jpeg"}
          />
          <ProductWithDetailCard
            title={"Contractors Product 2"}
            image={"product3.jpeg"}
            reverse
          />
        </section>
      ),
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
        <Tabs
          inkBarColor={"#000000"}
          itemActiveColor={"#000000"}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </section>
      <Footer />
    </main>
  );
};

export default Products;
