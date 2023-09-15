import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
      <section className="contact-section">
        <form action="">
          <p>
            Hello there, my name is
            <input type="text" placeholder="your name here" />
          </p>
          <p>and i'm looking for a team to help me with</p>
          <textarea
            name="description"
            id=""
            placeholder="short project description"
          />
          <p>
            you can reach me at
            <input
              type="email"
              placeholder="your eamil address"
              name=""
              id=""
            />
          </p>
          <button>Send</button>
        </form>
        <div>
          <p>778.883.5476</p>
          <p>info@lifestone.ca</p>
          <p>5848 Balistreri Pines Apt.69</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
