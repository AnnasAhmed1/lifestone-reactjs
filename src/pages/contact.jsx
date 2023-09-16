import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/pages/contact.css";

const Contact = () => {
  return (
    <main className="contact-main">
      <Navbar white />
      <div
        style={{
          minHeight: "100px",
          width: "100%",
        }}
      ></div>
      <div className="main-section container">
        <h5 className="helper-h5">
          Say
          <br />
          <span> Hello</span>
        </h5>
        <div className="main-section">
          <section className=" contact-section">
            <form
              className="helper-p4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <p>
                Hello there, my name is
                <input type="text" placeholder="your name here" />
              </p>
              <p>
                and i'm looking for a team to help me with
                <textarea
                  name="description"
                  id=""
                  placeholder="short project description"
                />
              </p>
              <p>
                you can reach me at
                <input
                  type="email"
                  placeholder="your email address"
                  name=""
                  id=""
                />
              </p>
              <button>Send</button>
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
