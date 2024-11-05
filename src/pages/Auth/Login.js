/** @format */

// import React, { useState } from "react";
// import "./Login.css";
// import Logo from "../Auth/Magod Laser Logo - Default [2500].png";
// import { useNavigate } from "react-router-dom";
// import { useAlert } from "react-alert";

// const { getRequest, postRequest } = require("../api/apiinstance");
// const { endpoints } = require("../api/constants");

// function Login() {
//   //   const alert = useAlert();
//   const nav = useNavigate();

//   let [username, setUsername] = useState("");
//   let [formPassword, setPassword] = useState("");

//   function submitLogin() {
//     // e.preventDefault();
//     // if (!username || !formPassword) {
//     //   alert.error("Invalid Username/Password");
//     //   return;
//     // }
//     postRequest(
//       endpoints.loginAPI,
//       { username: username, password: formPassword },
//       (data) => {
//         if (data.accessToken) {
//           localStorage.setItem("token", data.accessToken);
//           localStorage.setItem("LazerUser", JSON.stringify(data));
//           window.location.href = "/home";
//         } else {
//           alert("Invalid Username/Password");
//         }
//       }
//     );
//   }

//   const handleLogin = () => {
//     nav("/home");
//   };
//   return (
//     <>
//       <div
//         className="row d-flex "
//         style={{ backgroundColor: "lightblue", height: "100vh" }}
//       >
//         <div className="col-lg-8">
//           <div className="card1 pb-5">
//             <div className="row">
//               <img className="imgLogo" alt="" src={Logo} />
//             </div>
//             <div className="row border-line">
//               <img
//                 src="https://i.imgur.com/uNGdWHi.png"
//                 className="imageused"
//               />
//               <h6 style={{ padding: "15px 0px 0px 0px", textAlign: "center" }}>
//                 MAGOD LASER is synonymous with application of the Laser Power in
//                 manufacturing.To reinvent and continuously advance the use of
//                 Laser Technology.
//               </h6>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4">
//           <div className="card2 card border-0 px-4 py-5 ">
//             <div className="row mb-4 px-3">
//               <h6 className="mb-0 mr-4 mt-2" style={{ color: "white" }}>
//                 <b>LOGIN</b>
//               </h6>
//             </div>
//             <div className="row px-3 mb-4">
//               <div className="line"></div>
//               <div className="line"></div>
//             </div>
//             <div className="row px-3">
//               <label className="mb-2">
//                 <h6 className="mb-0 text-sm">Email</h6>
//               </label>
//               <input
//                 className="inputfeild"
//                 type="text"
//                 name="email"
//                 placeholder="Enter a valid email address"
//                 onChange={(e) => {
//                   setUsername(e.target.value);
//                 }}
//               />
//             </div>
//             <div className="row px-3">
//               <label className="mb-2">
//                 <h6 className="mb-0 text-sm">Password</h6>
//               </label>
//               <input
//                 className="inputfeild"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </div>
//             <div className="row px-3 mb-4">
//               <a
//                 href="#"
//                 className="ml-auto mb-0 text-sm"
//                 style={{ fontSize: "small" }}
//               >
//                 Forgot Password?
//               </a>
//             </div>
//             <div className="row mb-3 px-3">
//               <button
//                 type="submit"
//                 className="button-style"
//                 style={{
//                   height: "43px",
//                   borderRadius: "10px",
//                   fontFamily: "sans-serif",
//                 }}
//                 // onClick={handleLogin}
//                 onClick={() => submitLogin()}
//               >
//                 Let Me In
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

/** @format */

// import React, {useState} from 'react'
// import "./Login.css"
// import Logo from "../Auth/Magod Laser Logo - Default [2500].png"
// import { useNavigate, } from 'react-router-dom'
// import { baseURL } from '../../api/baseUrl';

// function Login() {
// const navigate=useNavigate();
// let [username, setUsername] = useState("");
// let [formPassword, setPassword] = useState("");
//   const handleLogin = () => {
//     navigate('/home')
//   }

//    const postRequest = async (url, body, callback) => {
//     let response = await fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });
//     let content = await response.json();
//     callback(content);
//   };

//   function submitLogin() {
//     postRequest(
//       baseURL+"/user/login",
//         { username: username, password: formPassword },
//         (data) => {
//           if (data.accessToken) {
//             localStorage.setItem("token", data.accessToken);
//             localStorage.setItem("LazerUser", JSON.stringify(data));
//             window.location.href = "/home";
//           } else {
//             alert("Invalid Username/Password");
//           }
//         }
//       );
//   }

//   return (

//     <>
//          <div
//         className="row d-flex "
//         style={{ backgroundColor: "lightblue", height: "100vh" }}
//       >
//         <div className="col-lg-8">
//           <div className="card1 pb-5">
//             <div className="row">
//               <img className="imgLogo" alt="" src={Logo} />
//             </div>
//             <div className="row border-line">
//               <img
//                 src="https://i.imgur.com/uNGdWHi.png"
//                 className="imageused"
//               />
//               <h6 style={{ padding: "15px 0px 0px 0px", textAlign: "center" }}>
//                 MAGOD LASER is synonymous with application of the Laser Power in
//                 manufacturing.To reinvent and continuously advance the use of
//                 Laser Technology.
//               </h6>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4">
//           <div className="card2 card border-0 px-4 py-5 ">
//             <div className="row mb-4 px-3">
//               <h6 className="mb-0 mr-4 mt-2" style={{ color: "white" }}>
//                 <b>LOGIN</b>
//               </h6>
//             </div>
//             <div className="row px-3 mb-4">
//               <div className="line"></div>
//               <div className="line"></div>
//             </div>
//             <div className="row px-3">
//               <label className="mb-2">
//                 <h6 className="mb-0 text-sm">Email</h6>
//               </label>
//               <input
//                 className="inputfeild"
//                 type="text"
//                 name="email"
//                 placeholder="Enter a valid email address"
//                 onChange={(e) => {
//                   setUsername(e.target.value);
//                 }}
//               />
//             </div>
//             <div className="row px-3">
//               <label className="mb-2">
//                 <h6 className="mb-0 text-sm">Password</h6>
//               </label>
//               <input
//                 className="inputfeild"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </div>
//             <div className="row px-3 mb-4">
//               <a
//                 href="#"
//                 className="ml-auto mb-0 text-sm"
//                 style={{ fontSize: "small" }}
//               >
//                 Forgot Password?
//               </a>
//             </div>
//             <div className="row mb-3 px-3">
//               <button
//                 type="submit"
//                 className="button-style"
//                 style={{
//                   height: "43px",
//                   borderRadius: "10px",
//                   fontFamily: "sans-serif",
//                 }}
//                 // onClick={handleLogin}
//                 onClick={() => submitLogin()}
//               >
//                 Let Me In
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Login

/** @format */

import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import Logo from "../Auth/Magod Laser Logo - Default [2500].png";
import { useNavigate, useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
// import { MenusContext } from "../../Context/MenusContext";
import Cookies from "js-cookie";
import { baseURL } from "../api/baseUrl";
import axios from "axios";

const { getRequest, postRequest } = require("../api/apiinstance");
const { endpoints } = require("../api/constants");

function Login() {
	const nav = useNavigate();
	// const location = useLocation();
	// const queryParams = new URLSearchParams(location.search);
	// const storedDataParam = queryParams.get("dataToStore");
	// const storedData = storedDataParam ? JSON.parse(storedDataParam) : null;
	// console.log("storedData", storedData.userData.Role);
	const [menuUrls, setMenuUrls] = useState([]);
	// const { menusData, setMenusData } = useContext(MenusContext); // Use the context

	// Retrieve userData from cookies
	const userData = JSON.parse(Cookies.get("userData") || "{}");
	console.log("User Data:", userData);
	// Set userData into localStorage
	localStorage.setItem("userData", JSON.stringify(userData));
	useEffect(() => {
		if (userData) {
			const fetchMenuUrls = async () => {
				try {
					const role = userData.Role;
					const username = userData.UserName;
					if (!role || !username) {
						console.error(
							"Role, username, or access token is missing in local storage"
						);
						return;
					}
					console.log(role, username);
					// const response = await fetch(endpoints.MenuUrlsAPI, {
					// 	method: "POST",
					// 	headers: {
					// 		"Content-Type": "application/json",
					// 		// Authorization: `Bearer ${token}`,
					// 	},
					// 	body: { role, username },
					// });
					// const response = postRequest(
					// 	baseURL + "/user/fetchMenuUrls",
					// 	{ role, username },
					// 	(data) => {
					// 		console.log(data);
					// 	}
					// );

					// axios.post(
					// 	baseURL + "/user/fetchMenuUrls",
					// 	{ role, username }.then((res) => {
					// 	})
					// );

					axios
						.post(baseURL + "/user/fetchMenuUrls", { role, username })
						.then((response) => {
							console.log(response.data.data);
							const responseData = response.data;
							console.log("responseData", responseData);
							localStorage.setItem("LazerUser", JSON.stringify(responseData));
						});
					// if (!response.ok) {
					// 	throw new Error(`HTTP error! status: ${response.status}`);
					// }
					// const responseData = await response.json();
					// console.log("responseData", responseData);
					// localStorage.setItem("LazerUser", JSON.stringify(responseData));
					// // setMenusData(responseData);

					// const data = await response.json();
					// setMenuUrls(data.access);
				} catch (error) {
					console.error("Error fetching menu URLs:", error);
				}
			};

			fetchMenuUrls();
			nav("quotation/");
		}
		// }, [userData, nav, menusData, setMenusData]);
	}, [userData]);
	// useEffect(() => {
	// 	if (menusData) {
	// 		console.log("menusData has been updated:", menusData);
	// 		localStorage.setItem("menusData", menusData);
	// 	}
	// }, [menusData]);

	let [username, setUsername] = useState("");
	let [formPassword, setPassword] = useState("");

	function submitLogin() {
		postRequest(
			endpoints.loginAPI,
			{ username: username, password: formPassword },
			(data) => {
				if (data.accessToken) {
					localStorage.setItem("token", data.accessToken);
					localStorage.setItem("LazerUser", JSON.stringify(data));
					// window.location.href = "/home";
					nav = "/home";
				} else {
					alert("Invalid Username/Password");
				}
			}
		);
	}

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			console.log("Enter key pressed!");
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
	};
	return (
		<>
			{/* <div
				className="row d-flex "
				style={{ backgroundColor: "lightblue", height: "100vh" }}>
				<div className="col-lg-8">
					<div className="card1 pb-5">
						<div className="row">
							<img
								className="imgLogo"
								alt=""
								src={Logo}
							/>
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
							<h6
								className="mb-0 mr-4 mt-2"
								style={{ color: "white" }}>
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
								onKeyPress={handleKeyPress}
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
								onKeyPress={handleKeyPress}
							/>
						</div>
						<div className="row px-3 mb-4">
							<a
								href="#"
								className="ml-auto mb-0 text-sm"
								style={{ fontSize: "small" }}>
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
								onClick={() => submitLogin()}>
								Let Me In
							</button>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
}

export default Login;
