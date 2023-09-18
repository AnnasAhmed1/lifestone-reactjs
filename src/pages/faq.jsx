import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/pages/faq.css";
import { H2, H3, H4 } from "../helper/heading";
import { P3 } from "../helper/paragraph";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Footer from "../components/footer";

const Faq = () => {
  const categories = [
    {
      label: "Bootstrap Admin",
      faq: [
        {
          question: "How Does it work?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "Do I need a designer to use this admin theme?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "What do i need to do to start selling?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
      ],
    },
    {
      label: "Laravel App",
      faq: [
        {
          question: "How Does it work?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "Do I need a designer to use this admin theme?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "What do i need to do to start selling?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
      ],
    },
    {
      label: "Angular Dashboard",
      faq: [
        {
          question: "How Does it work?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "Do I need a designer to use this admin theme?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "What do i need to do to start selling?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
      ],
    },
    {
      label: "VueJs Dashboard",
      faq: [
        {
          question: "How Does it work?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "Do I need a designer to use this admin theme?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "What do i need to do to start selling?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
      ],
    },
    {
      label: "React Admin",
      faq: [
        {
          question: "How Does it work?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "Do I need a designer to use this admin theme?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "What do i need to do to start selling?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
      ],
    },
    {
      label: "Bootstrap Theme",
      faq: [
        {
          question: "How Does it work?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "Do I need a designer to use this admin theme?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
        {
          question: "What do i need to do to start selling?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab vitae sint illum fugiat voluptate, quibusdam assumenda at excepturi modi.",
        },
      ],
    },
  ];
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
    setOpen(null);
  };
  const [open, setOpen] = useState();
  const handleOpen = (index) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <main className="faq-main">
      <Navbar white />

      <div
        style={{
          minHeight: "73px",
          width: "100%",
        }}
      ></div>
      <section className="container main-section faq-section">
        <div className="categories-container">
          <H3 text="Categories" />
          <ul>
            {categories?.map((category, index) => {
              return (
                <li
                  onClick={() => {
                    handleActive(index);
                  }}
                  key={index}
                  className={`category ${
                    active === index ? "category-active" : null
                  }`}
                >
                  {category.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="faq-container">
          <div>
            <H2 text="Frequently Asked Question" />
            <P3 text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam, optio ad recusandae fuga autem laudantium eveniet velit totam quam sapiente culpa doloribus neque quidem?" />
          </div>
          <div>
            <H3 text="Buying Product" />
            <ul>
              {categories[active]?.faq?.map((faq, index) => {
                return (
                  <li key={index}>
                    <p
                      className="question"
                      onClick={() => {
                        handleOpen(index);
                      }}
                    >
                      {open === index ? <MinusOutlined /> : <PlusOutlined />}
                      {faq.question}
                    </p>
                    <p
                      className={`answer ${
                        open === index ? "faq-active" : null
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Faq;
