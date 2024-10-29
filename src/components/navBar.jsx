// src/components/Navbar.jsx
import React from 'react';
import NavItem from './navItem';

function Navbar() {
  return (
    <nav>
      <ul>
        <NavItem label="Home" to="/" />
        <NavItem label="Projects" to="/projects" />
        <NavItem label="About" to="/about" />
        <NavItem label="Contact" to="/contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
