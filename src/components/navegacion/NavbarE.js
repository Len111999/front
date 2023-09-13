import React from 'react';
import LogoComponent from './LogoComponent';
import MenuListComponent from './MenuListComponent';
import IconList from './Iconos-Navbar';
import './NavbarE.css';

const NavbarE = () => {
  return (
    <nav className="navbarE">
      <div className="navbarE-container">
        <LogoComponent />
        <div className="menu-list-container">
          <MenuListComponent />
        </div>
        <div className="IconList-container">
            <IconList />
        </div>
      </div>
    </nav>
  );
}

export default NavbarE;