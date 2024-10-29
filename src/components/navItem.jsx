import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

function NavItem({ label, to }) {
  return (
    <li>
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default NavItem;