import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import emailjs from "emailjs-com";
import "../styles/pages/contact.css";
import { Modal } from "antd";
import { H1, H2 } from "../helper/heading";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
// const antIcon = ;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x81yt3o",
        "template_twsrivr",
        form.current,
        "T8MZZ3v7Oj83Au3MO"
      )
      .then(
        (result) => {
          showModal();
          setLoading(false);
          setName("");
          setEmail("");
          setDescription("");
          setTimeout(() => {
            setIsModalOpen(false);
          }, 3000);
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  const handleInput = (setState, state) => {
    setState(state);
  };

  return (
    <main className="contact-main">
      <Navbar white />
      <div
        style={{
          minHeight: "100px",
          width: "100%",
        }}
      ></div>

      <Modal
        centered
        // title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        className="modal"
      >
        <H2 text="Thanks For Your Response" center />
        <p>
          <CheckOutlined />
        </p>
      </Modal>
      <div className="main-section container">
        <h5 className="helper-h5">
          Say
          <br />
          <span> Hello</span>
        </h5>
        <div className="main-section">
          <section className=" contact-section">
            <form
              ref={form}
              className="helper-p4"
              onSubmit={(e) => {
                sendEmail(e);
              }}
            >
              <p>
                Hello there, my name is
                <input
                  type="text"
                  name="name"
                  placeholder="your name here"
                  value={name}
                  onChange={(e) => {
                    handleInput(setName, e.target.value);
                  }}
                />
              </p>
              <p>
                and i'm looking for a team to help me with
                <textarea
                  name="description"
                  id=""
                  placeholder="short project description"
                  value={description}
                  onChange={(e) => {
                    handleInput(setDescription, e.target.value);
                  }}
                />
              </p>
              <p>
                you can reach me at
                <input
                  type="email"
                  placeholder="your email address"
                  name="email"
                  id=""
                  value={email}
                  onChange={(e) => {
                    handleInput(setEmail, e.target.value);
                  }}
                />
              </p>
              <button
                style={{
                  width: "120px",
                  height: "50px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {loading ? (
                  <Spin
                    indicator={<LoadingOutlined spin />}
                    style={
                      {
                        // color: "var(--textPrimary)",
                      }
                    }
                  />
                ) : (
                  "Send"
                )}
              </button>
            </form>
            <div className="helper-p4">
              <p>778.883.5476</p>
              <p>info@lifestone.ca</p>
              <p>5848 Balistreri Pines Apt.69</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
