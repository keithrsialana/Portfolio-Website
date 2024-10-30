// src/components/Navbar.jsx
import React from "react";
import NavItem from "./navItem";

function Navbar() {
	return (
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
				<NavItem label="Home" to="/"/>
				<NavItem label="Projects" to="/projects" />
				<NavItem label="About" to="/about" />
				<NavItem label="Contact" to="/contact" />
			</ul>
		</div>
	);
}

export default Navbar;
