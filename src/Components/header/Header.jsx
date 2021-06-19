import React, {useState} from "react";
import { useRoute } from "wouter";
import Filter from "../filter/Filter";

export default function Header(props) {
	const logoutHandler =() => {
		localStorage.removeItem("token");
	};
	const[ filterCriteria, setFilterCriteria] = useState({})
  const [match, params] = useRoute("/login");
  const filterFunction = (filterObject) => {
		(function setFilter(){
		setFilterCriteria(filterObject)})()
		props.passFilterToApp(filterObject)
	}
		// console.log('filter criteria is: ', filterCriteria)
	
	
	return (
		<div className="header">
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand" style={{ fontSize: "x-large" }} href="/">
					<span>
						<i className="far fa-newspaper px-2"></i>
					</span>
					<span></span>
					News Point
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon">
						<i
							className="fas fa-bars"
							style={{ color: "#fff", fontSize: "28px" }}
						></i>
					</span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link " href="/">
								Dashboard
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" id ="readNowLink" href="/readNow">
								Read Now
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="/register">
								Register
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						{!match && (
							<div className="nav-item d-flex">
								<Filter filterFunction = { filterFunction } />
								<a href="/" className="nav-link text-white">
									{" "}
									Admin{" "}
									<span>
										<i className="fas fa-user"></i>
									</span>
								</a>
								<a href="/login" className="nav-link">
									<button
										id="logOutButton"
										type="button"
										onClick={ logoutHandler }
										className="btn btn-primary"
									>
										{" "}
										Logout <i className="fas fa-sign-out-alt"></i>
									</button>{" "}
								</a>
							</div>
						)}
					</form>
				</div>
			</nav>
		</div>
	);
}
