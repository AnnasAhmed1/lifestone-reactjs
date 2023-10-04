import React, { useEffect, useState } from "react";
import "../styles/pages/test.css";
import {
  AppleOutlined,
  FacebookOutlined,
  GoogleOutlined,
  LockFilled,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    document.title = `${location.pathname
      .replace("/", "")
      .charAt(0)
      .toUpperCase() + location.pathname.slice(2)} - Lifestone`;
  }, [location]);
  return (
    <>
      <Navbar
        white
        style={{
          zIndex: "999",
        }}
      />

      <div
        style={{
          minHeight: "80px",
          width: "100%",
        }}
      ></div>
      <main className="login-main main-section">
        <div
          class={`login-container  ${active ? "right-panel-active" : null}`}
          id="container"
        >
          {/* <img
            style={{
              position: "absolute",
              width: "70px",
              height: "70px",
              zIndex: "99999",
              left: "48%",
              right: "48%",
              top: "-40px",

              borderRadius: "50%",
            }}
            src={require("../assets/about_lifestone.jpeg")}
            alt=""
          /> */}
          <div class="form-container sign-up-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h1>Create Account</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <GoogleOutlined
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </a>
                <a href="#" class="social">
                  <FacebookOutlined
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </a>
                <a href="#" class="social">
                  <AppleOutlined
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </a>
              </div>
              <span>or use your email for registration</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                class="login__field"
              >
                <UserOutlined
                  style={{
                    marginRight: "-15px",
                  }}
                />
                <input
                  type="text"
                  class="login__input"
                  placeholder="First Name"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                class="login__field"
              >
                <UserOutlined
                  style={{
                    marginRight: "-15px",
                  }}
                />
                <input
                  type="text"
                  class="login__input"
                  placeholder="Last Name"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                class="login__field"
              >
                <PhoneOutlined
                  style={{
                    marginRight: "-15px",
                    transform: "rotate(90deg)",
                  }}
                />
                <input
                  type="text"
                  class="login__input"
                  placeholder="Phone Number"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                class="login__field"
              >
                <MailOutlined
                  style={{
                    marginRight: "-15px",
                  }}
                />
                <input type="text" class="login__input" placeholder="Email" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                class="login__field"
              >
                <LockFilled
                  style={{
                    marginRight: "-15px",
                  }}
                />
                <input
                  type="password"
                  class="login__input"
                  placeholder="Password"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                class="login__field"
              >
                <LockFilled
                  style={{
                    marginRight: "-15px",
                  }}
                />
                <input
                  type="password"
                  class="login__input"
                  placeholder="Confirm Password"
                />
              </div>
              <button>Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h1>Sign in</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <GoogleOutlined
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </a>
                <a href="#" class="social">
                  <FacebookOutlined
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </a>
                <a href="#" class="social">
                  <AppleOutlined
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </a>
              </div>
              <span>or use your account</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                className="login__field"
              >
                <UserOutlined
                  style={{
                    marginRight: "-15px",
                  }}
                />
                <input
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                className="login__field"
              >
                <LockFilled
                  style={{
                    marginRight: "-15px",
                  }}
                />
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  class="ghost"
                  id="signIn"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>New to Lifestone!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  class="ghost"
                  id="signUp"
                  onClick={() => {
                    setActive(true);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
