import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // If you're using React Router

function NavItem({ label, to }) {
  const urlLocation = useLocation().pathname;
  const location = urlLocation.replace('/', '');
  
  if ((location != '' && location == label.toLowerCase()) || (urlLocation == "/" && label == "About Me")){
    return (
      <li className='nav-item active'>
        <Link to={to} className="nav-link text-antiflashWhite">{label}</Link>
      </li>
    );
  }
  else {
    return (
      <li className='nav-item'>
        <Link to={to} className="nav-link text-antiflashWhite">{label}</Link>
      </li>
    );
  }
  
};

export default NavItem;