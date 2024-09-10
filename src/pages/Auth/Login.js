import React, { useState } from "react";
import "./Login.css";
import Logo from "../Auth/Magod Laser Logo - Default [2500].png";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const { getRequest, postRequest } = require("../api/apiinstance");
const { endpoints } = require("../api/constants");

function Login() {
  //   const alert = useAlert();
  const nav = useNavigate();

  let [username, setUsername] = useState("");
  let [formPassword, setPassword] = useState("");

  function submitLogin() {
    // e.preventDefault();
    // if (!username || !formPassword) {
    //   alert.error("Invalid Username/Password");
    //   return;
    // }
    postRequest(
      endpoints.loginAPI,
      { username: username, password: formPassword },
      (data) => {
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("LazerUser", JSON.stringify(data));
          window.location.href = "/home";
        } else {
          alert("Invalid Username/Password");
        }
      }
    );
  }

  const handleLogin = () => {
    nav("/home");
  };
  return (
    <>
      <div
        className="row d-flex "
        style={{ backgroundColor: "lightblue", height: "100vh" }}
      >
        <div className="col-lg-8">
          <div className="card1 pb-5">
            <div className="row">
              <img className="imgLogo" alt="" src={Logo} />
            </div>
            <div className="row border-line">
              <img
                src="https://i.imgur.com/uNGdWHi.png"
                className="imageused"
              />
              <h6 style={{ padding: "15px 0px 0px 0px", textAlign: "center" }}>
                MAGOD LASER is synonymous with application of the Laser Power in
                manufacturing.To reinvent and continuously advance the use of
                Laser Technology.
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card2 card border-0 px-4 py-5 ">
            <div className="row mb-4 px-3">
              <h6 className="mb-0 mr-4 mt-2" style={{ color: "white" }}>
                <b>LOGIN</b>
              </h6>
            </div>
            <div className="row px-3 mb-4">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="row px-3">
              <label className="mb-2">
                <h6 className="mb-0 text-sm">Email</h6>
              </label>
              <input
                className="inputfeild"
                type="text"
                name="email"
                placeholder="Enter a valid email address"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="row px-3">
              <label className="mb-2">
                <h6 className="mb-0 text-sm">Password</h6>
              </label>
              <input
                className="inputfeild"
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="row px-3 mb-4">
              <a
                href="#"
                className="ml-auto mb-0 text-sm"
                style={{ fontSize: "small" }}
              >
                Forgot Password?
              </a>
            </div>
            <div className="row mb-3 px-3">
              <button
                type="submit"
                className="button-style"
                style={{
                  height: "43px",
                  borderRadius: "10px",
                  fontFamily: "sans-serif",
                }}
                // onClick={handleLogin}
                onClick={() => submitLogin()}
              >
                Let Me In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
