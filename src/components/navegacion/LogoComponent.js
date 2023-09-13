import React from 'react';
import { Link } from 'react-router-dom';
import './LogoComponent.css'

const LogoComponent = () => {
  return (
    <Link to="/" className="navbarE-logo">
      <img src={`${process.env.PUBLIC_URL}/Logo_NEX.svg`} alt='Logo-Icon'></img>
    </Link>
  );
}

export default LogoComponent;