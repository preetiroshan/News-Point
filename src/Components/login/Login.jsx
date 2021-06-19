import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/Header";
import { loginApi } from "../../Services/loginService";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	let history = useHistory();
	const loginHandler = () => {
		const myData = {
			username,
			password,
		};
		loginApi(myData)
			.then((data) => {
				localStorage.setItem("token", data.token);
				history.push("/");
				return data;
			})
			.catch(() => {
				alert("Invalid Credentials");
			});
	};
	return (
		<div>
			<div style={{ textAlign: "center", paddingTop: "4vh" }}></div>
			<div className="row mt-5" style={{ textAlign: "center" }}>
				<div className="col-md-4"> </div>

				<div className="col-xs-4 px-4">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1" className="px-4">
							<h4>Login to Continue</h4>
						</label>
						<br />
						<br />
						<input
							type="text"
							name="username"
							id="username"
							className="form-control"
							placeholder="Enter Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							className="form-control"
							placeholder="Password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						id="loginButton"
						onClick={loginHandler}
						type="submit"
						className="btn btn-primary"
					>
						Login{" "}
						<span>
							<i className="fas fa-sign-in-alt"></i>
						</span>
					</button>
					<br />
				</div>

				<div className="col-md-4">
					{false && <Header username={username} />}
				</div>
			</div>
		</div>
	);
}
