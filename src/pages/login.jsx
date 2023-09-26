import React from "react";
import "../styles/pages/login.css";
import { UserOutlined, LockFilled, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-main">
      <div className="screen">
        <div className="screen__content">
          <form
            className="login"
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
              className="login__field"
            >
              <UserOutlined
                style={{
                  marginRight: "-15px",
                  color: "#7875B5",
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
              }}
              className="login__field"
            >
              <LockFilled
                style={{
                  marginRight: "-15px",
                  color: "#7875B5",
                }}
              />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button
              className="button login__submit"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className="button__text">Log In Now</span>
              <RightOutlined />
            </button>
            <button type="button" className="signup-button"
            onClick={()=>{
                navigate('/signup')
            }}
            >
              New to Lifestone
              <span className=""
              
              > Signup</span>
            </button>
          </form>

          {/* <div className="social-login">
            <h3>new to LIFESTONE SIGNUP</h3>
            <div className="social-icons">
              <a
                href="#"
                className="social-login__icon bx bxl-google"
                id="google"
              ></a>
              <a
                href="#"
                className="social-login__icon bx bxl-instagram"
                id="instagram"
              ></a>
              <a
                href="#"
                className="social-login__icon bx bxl-facebook"
                id="facebook"
              ></a>
              <a
                href="#"
                className="social-login__icon bx bxl-twitter"
                id="twitter"
              ></a>
            </div>
          </div> */}
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
