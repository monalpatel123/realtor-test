import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ navData, profileData }) => {
	const history = useHistory();
	return (
		<div className="nav">
			{/* Logo */}
			<div>
				<img
					style={{ cursor: "pointer" }}
					src={navData.logoImage}
					className="nav-logo"
					onClick={() => history.push("/")}
				/>
			</div>
			<div>
				<h2 className="nav-heading">Earthquake Zen Garden</h2>
			</div>
			<div>
				<Link to="/profile">Welcome {profileData.firstName}</Link>
			</div>
		</div>
	);
};

export default Navbar;
