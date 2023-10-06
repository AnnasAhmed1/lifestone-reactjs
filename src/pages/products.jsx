import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/pages/product.css";
import { Tabs } from "antd";
import ProductWithDetailCard from "../components/productWithDetailCard";
import { useLocation, useParams } from "react-router-dom";

const Products = () => {
  const { tab } = useParams();
  const activeTab = tab ? tab : "1";
  const pruductsDetails = {
    "Manufacturing Consulting": {
      details: "",
    },

    INNVex: {
      subTitle: "Revolutionizing Inventory Management",
      details:
        "At Lifestone, we understand that effective inventory management lies at the heart of every successful business operation. Introducing INNVeX, our cutting-edge inventory management module designed to transform the way you handle your assets. INNVeX is not just another inventory tool; it's a game-changer, offering you unparalleled control, real-time insights, and seamless integration within the Lifestone platform. Say goodbye to the challenges of inventory management and embrace a new era of efficiency and productivity with INNVeX.",
    },

    INNTimex: {
      subTitle: "Redefining Workforce Management",
      details:
        "At Lifestone, we understand that effective workforce management is the cornerstone of any successful organization. Introducing INNTimeX—an innovative time tracking module designed to revolutionize how you monitor, manage, and optimize your workforce. With INNTimeX, you can seamlessly track time, assign tasks, and gain invaluable insights into your organization's productivity, all within the Lifestone platform.",
    },

    INNLens: {
      subTitle: "AI-Powered Precision Imaging for Stone Slabs",

      details:
        "Welcome to INNLens, a revolutionary module within the Lifestone Platform. INNLens harnesses the power of Artificial Intelligence (AI) and Machine Learning (ML) to elevate your stone-related projects. With advanced digital imaging technology, INNLens captures, analyzes, and enhances stone slab visuals like never before. From AI-driven image recognition to ML-based perspective correction, INNLens unlocks a new realm of precision and possibilities.",
    },

    INNCanvas: {
      details: "",
    },

    "INNStone Market": {
      subTitle: "Elevate Your Business",
      details:
        "Welcome to INNStone market, a dynamic module within the Lifestone platform. INNStone market is your gateway to expanding your business reach and offering your products and services to a wider audience. Explore new opportunities, connect with customers, and take your business to the next level.",
    },

    INNCloud: {
      details: "",
    },

    INNPhoto: {
      details: "",
    },

    INNSlid: {
      details: "",
    },

    INNPages: {
      subTitle: "Your Gateway to a Dynamic Online Presence",
      details:
        "Welcome to INNPages, an essential module within the Lifestone platform. INNPages empowers subscribers to create a captivating online presence effortlessly. From personal blogs to business websites, INNPages offers the tools you need to design and manage your online space with ease.",
    },

    INNCad: {
      details: "",
    },

    INNMap: {
      details: "",
    },

    StoneSense: {
      subTitle: "Your Stone Knowledge Hub",
      details:
        "StoneSense is your trusted source for all things related to stone. Whether you're a seasoned homeowner or just starting to explore the world of stone, StoneSense is here to empower you with knowledge, advice, and resources. Discover the beauty and potential of stone in your home with StoneSense.",
    },

    INNArchStoneHub: {
      subTitle: "Your Architectural Stone Expert",
      details:
        "INNArchStoneHub is your trusted resource within the Lifestone Platform, dedicated to architects and designers in search of stone-related expertise. Discover a hub tailored to your professional needs, offering industry insights, materials expertise, collaboration opportunities, and a community of like-minded professionals. Elevate your architectural projects with the power of stone through INNArchStoneHub.",
    },

    INNStoneCraftAdvise: {
      subTitle: "Your Partner in Perfecting the Art of Stone Craftsmanship",
      details:
        "Welcome to INNStoneCraftAdvise, an integral part of the Lifestone Platform. Our mission is to empower stone fabricators with expert guidance and optimization solutions. Whether you're a seasoned craftsman or just starting, we're here to help you perfect your artistry with stone. Explore our consultancy services tailored to the stone craft, and let's craft excellence together.",
    },

    INNBalance: {
      subTitle: "Precision Resource Management",
      details:
        "Introducing INNBalance, the latest addition to the Lifestone Platform. INNBalance is your solution for optimizing resource allocation and achieving unparalleled precision in managing your stone-related projects. From materials and labor to schedules and budgets, INNBalance ensures that every aspect of your stone projects is finely tuned for success.",
    },
  };
  const products = {
    fabricators: [
      "Manufacturing Consulting",
      "INNVex",
      "INNTimex",
      "INNLens",
      "INNCanvas",
      "INNStone Market",
      "INNCloud",
      "INNPhoto",
      "INNSlid",
      "INNCad",
      "INNMap",
    ],
    architects: [
      "Stone project Consulting (stone, design, installation)",
      "INNStone Net",
      "INNStone Market",
      "INNBalance",
      "INNLens",
      "INNCanvas",
      "INNCloud",
      "INNVex",
      "INNTimex",
      "INNCad",
      "INNMap",
    ],
    homeOwners: [
      "Stone Restoration and Maintainance Consultation",
      "Stone Project Consulting (stone, design, installation)",
      "INNStone Net",
      "INNStone Market",
      "INNLens",
      "INNCanvas",
      "INNCloud",
      "INNVex",
      "INNBalance",
      "INNCad",
      "INNMap",
    ],
    enterpreneurs: [
      "Manufacturing Consulting",
      "INNCanvas",
      "INNStone Market",
      "Restoration and maintanance consultation and training",
      "INNStone Jobs Posting",
      "INNStone Net",
      "INNCad",
      "INNCloud",
      "INNPhoto",
      "INNTimex",
      "INNMap",
    ],
    contractors: [
      "Stone Project Consulting (stone, design, installation)",
      "INNStone Net",
      "INNStone Market",
      "INNCanvas",
      "INNStone Jobs Posting",
      "INNCad",
      "INNCloud",
      "INNVex",
      "INNPhoto",
      "INNTimex",
      "INNMap",
    ],
  };

  const items = [
    {
      key: "Fabricators",
      label: "For Fabricators",
      children: (
        <section>
          {products.fabricators?.map((product, index) => {
            return (
              <ProductWithDetailCard
                key={index}
                title={product.replace(/INN/g, "")}
                product={product}
                INN={product.includes("INN")}
                description={
                  pruductsDetails[product]?.details?.length
                    ? pruductsDetails[product].details
                    : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consectetur expedita, labore asperiores natus minima quod harum minus vero, quas ducimus eligendi suscipit deserunt quos pariatur! Blanditiis beatae, sit animi eum, quidem harum officiis eaque, unde repellat voluptas sunt asperiores"
                }
                subTitle={
                  pruductsDetails[product]?.subTitle?.length
                    ? pruductsDetails[product].subTitle
                    : "Lorem ipsum dolor sit, amet."
                }
                reverse={(index + 1) % 2 === 0}
              />
            );
          })}
        </section>
      ),
    },
    {
      key: "Architects",
      label: "For Architects",
      children: (
        <section>
          {products.architects?.map((product, index) => {
            return (
              <ProductWithDetailCard
                key={index}
                title={product.replace(/INN/g, "")}
                product={product}
                INN={product.includes("INN")}
                description={
                  pruductsDetails[product]?.details?.length
                    ? pruductsDetails[product].details
                    : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consectetur expedita, labore asperiores natus minima quod harum minus vero, quas ducimus eligendi suscipit deserunt quos pariatur! Blanditiis beatae, sit animi eum, quidem harum officiis eaque, unde repellat voluptas sunt asperiores"
                }
                subTitle={
                  pruductsDetails[product]?.subTitle?.length
                    ? pruductsDetails[product].subTitle
                    : "Lorem ipsum dolor sit, amet."
                }
                reverse={(index + 1) % 2 === 0}
              />
            );
          })}
        </section>
      ),
    },
    {
      key: "Homeowners",
      label: "For Homeowners",
      children: (
        <section>
          {products.homeOwners?.map((product, index) => {
            return (
              <ProductWithDetailCard
                key={index}
                title={product.replace(/INN/g, "")}
                product={product}
                INN={product.includes("INN")}
                description={
                  pruductsDetails[product]?.details?.length
                    ? pruductsDetails[product].details
                    : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consectetur expedita, labore asperiores natus minima quod harum minus vero, quas ducimus eligendi suscipit deserunt quos pariatur! Blanditiis beatae, sit animi eum, quidem harum officiis eaque, unde repellat voluptas sunt asperiores"
                }
                subTitle={
                  pruductsDetails[product]?.subTitle?.length
                    ? pruductsDetails[product].subTitle
                    : "Lorem ipsum dolor sit, amet."
                }
                reverse={(index + 1) % 2 === 0}
              />
            );
          })}
        </section>
      ),
    },
    {
      key: "Enterpreneurs",
      label: "For Enterpreneurs",
      children: (
        <section>
          {products.enterpreneurs?.map((product, index) => {
            return (
              <ProductWithDetailCard
                key={index}
                title={product.replace(/INN/g, "")}
                product={product}
                INN={product.includes("INN")}
                description={
                  pruductsDetails[product]?.details?.length
                    ? pruductsDetails[product].details
                    : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consectetur expedita, labore asperiores natus minima quod harum minus vero, quas ducimus eligendi suscipit deserunt quos pariatur! Blanditiis beatae, sit animi eum, quidem harum officiis eaque, unde repellat voluptas sunt asperiores"
                }
                subTitle={
                  pruductsDetails[product]?.subTitle?.length
                    ? pruductsDetails[product].subTitle
                    : "Lorem ipsum dolor sit, amet."
                }
                reverse={(index + 1) % 2 === 0}
              />
            );
          })}
        </section>
      ),
    },
    {
      key: "Contractors",
      label: "For Contractors",
      children: (
        <section>
          {products.contractors?.map((product, index) => {
            return (
              <ProductWithDetailCard
                key={index}
                title={product.replace(/INN/g, "")}
                INN={product.includes("INN")}
                product={product}
                description={
                  pruductsDetails[product]?.details?.length
                    ? pruductsDetails[product].details
                    : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consectetur expedita, labore asperiores natus minima quod harum minus vero, quas ducimus eligendi suscipit deserunt quos pariatur! Blanditiis beatae, sit animi eum, quidem harum officiis eaque, unde repellat voluptas sunt asperiores"
                }
                subTitle={
                  pruductsDetails[product]?.subTitle?.length
                    ? pruductsDetails[product].subTitle
                    : "Lorem ipsum dolor sit, amet."
                }
                reverse={(index + 1) % 2 === 0}
              />
            );
          })}
        </section>
      ),
    },
  ];
  const onChange = () => {};
  const location = useLocation();
  useEffect(() => {
    document.title = `${
      location.pathname.replace("/products/", "")
      // .charAt(0)
      // .toUpperCase() + location.pathname.slice(2, -2)
    }
       - Lifestone`;
  }, [location]);
  return (
    <main className="about-main">
      <Navbar white />
      <div
        style={{
          minHeight: "80px",
          width: "100%",
        }}
      ></div>
      <section className="main-section container">
        <Tabs
          centered
          inkBarColor={"#000000"}
          itemActiveColor={"#000000"}
          defaultActiveKey={activeTab.toString()}
          items={items}
          onChange={onChange}
          tabBarStyle={{}}
        />
      </section>
      <Footer />
    </main>
  );
};

export default Products;
