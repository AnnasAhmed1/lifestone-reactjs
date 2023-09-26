import React from "react";
import "../styles/pages/login.css";
import {
  UserOutlined,
  LockFilled,
  RightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div class="login-main">
      <div class="screen">
        <div class="screen__content">
          <form
            style={{
              paddingTop: "60px",
            }}
            class="login"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              class="login__field"
            >
              <UserOutlined
                style={{
                  marginRight: "-15px",
                  color: "#7875B5",
                }}
              />
              <input type="text" class="login__input" placeholder="Full Name" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              class="login__field"
            >
              <UserOutlined
                style={{
                  marginRight: "-15px",
                  color: "#7875B5",
                }}
              />
              <input
                type="text"
                class="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              class="login__field"
            >
              <LockFilled
                style={{
                  marginRight: "-15px",
                  color: "#7875B5",
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
              }}
              class="login__field"
            >
              <PhoneOutlined
                style={{
                  marginRight: "-15px",
                  color: "#7875B5",
                  transform: "rotateY(180deg)",
                }}
              />
              <input
                type="text"
                class="login__input"
                placeholder="Phone number"
              />
            </div>
            <button
              class="button login__submit"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span class="button__text">Sign Up Now</span>
              <RightOutlined />
            </button>
            <button
              type="button"
              className="signup-button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already a member
              <span class=""> Login</span>
            </button>
          </form>

          {/* <div class="social-login">
            <h3>new to LIFESTONE SIGNUP</h3>
            <div class="social-icons">
              <a
                href="#"
                class="social-login__icon bx bxl-google"
                id="google"
              ></a>
              <a
                href="#"
                class="social-login__icon bx bxl-instagram"
                id="instagram"
              ></a>
              <a
                href="#"
                class="social-login__icon bx bxl-facebook"
                id="facebook"
              ></a>
              <a
                href="#"
                class="social-login__icon bx bxl-twitter"
                id="twitter"
              ></a>
            </div>
          </div> */}
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
