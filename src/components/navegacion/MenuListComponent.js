import React from 'react';
import { Link } from 'react-router-dom';
import './MenuListComponent.css';

const MenuListComponent = () => {
  return (
    <div>
      <ul className="navbarE-menu">
        <li className="navbarE-item">
          <Link to='/Equipo' className="navbarE-link">
            Componentes
          </Link>
        </li>
        <div className='separator'>
          <img src={`${process.env.PUBLIC_URL}/Siguiente.svg`} alt="Separator-Icon" />
        </div>
        <li className="navbarE-item">
          <Link to="/Accesorios" className="navbarE-link">
            Accesorios
          </Link>
        </li>
        <div className='separator'>
          <img src={`${process.env.PUBLIC_URL}/Siguiente.svg`} alt="Separator-Icon" />
        </div>
        <li className="navbarE-item">
          <Link to="/Personalizacion" className="navbarE-link">
            Personalización
          </Link>
        </li>
        <div className='separator'>
          <img src={`${process.env.PUBLIC_URL}/Siguiente.svg`} alt="Separator-Icon" />
        </div>
      </ul>
    </div>
  );
}

export default MenuListComponent;