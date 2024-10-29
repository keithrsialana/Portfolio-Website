import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

function NavItem({ label, to }) {
  return (
    <li className='nav-item'>
      <Link to={to} className="nav-link">{label}</Link>
    </li>
  );
};

export default NavItem;