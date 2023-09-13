import React from 'react';
import './Iconos-Navbar.css'; // Asegúrate de crear este archivo CSS
import { Link } from 'react-router-dom';

const IconosNavbar = () => {
  return (
    <ul className="icon-list">
      <li className="icon-item">
        <Link to="/login">
          <img src={`${process.env.PUBLIC_URL}/customer.svg`} alt='Login-Icon'/>
        </Link>
      </li>
      <li className="icon-item">
      <img src={`${process.env.PUBLIC_URL}/region.svg`} alt="Region-Icon" />
      </li>
      <li className='icon-item'>
        <img src={`${process.env.PUBLIC_URL}/cart.svg`} alt="Cart-Icon" />
      </li>
    </ul>
  );
}

export default IconosNavbar;
