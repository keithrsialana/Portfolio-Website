// src/components/Navbar.jsx
import React from "react";
import NavItem from "./navItem";

function Navbar() {
	return (
		<div className="collapse navbar-collapse bg-yale-darker" id="navbarNav">
			<ul className="navbar-nav">
				<NavItem label="About Me" to="/"/>				
				<NavItem label="Portfolio" to="/portfolio"/>				
				<NavItem label="Contact" to="/contact"/>				
				<NavItem label="Resume" to="/resume"/>				
			</ul>
		</div>
	);
}

export default Navbar;
