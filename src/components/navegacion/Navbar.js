import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [hoverColor, setHoverColor] = useState('#ffffff');

  useEffect(() =>{
    const colors = ['#08FF00', '#00FFF0', '#003EFF', '#DC00FF', '#FF008F', '#FF0000', '#FFA600', '#ECFF00'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setHoverColor(colors[currentIndex]);
    }, 200);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='Body'>
        <div className="Navbar" style={{ top: '0px', '--hover-color': hoverColor }}>
          <ul className="llinks">
            <li><a href="#Equipo_a_medida" className="mlink">Arma tu equipo</a></li>
            <li><a href="#mSoluciones" className="mlink">Soluciones</a></li>
            <li><a href="#Tienda" className="mlink">Tienda</a></li>
          </ul>
          <a href="/" className="logo">
          <img src="/Logo_NEX.svg" alt="NEX" width="115" height="30"/>
          </a>
          <ul className="rlinks">
            <li className="customer">
              <Link to="/login" className='Icono-Customer'>
                <img src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/customer.svg" width="20" height="20" alt="Accede a tu cuenta" />
              </Link>
            </li>
            <li className="region">
                <span className="change_region_link">
                <img src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/region.svg" className='Icono-Region' width="22" height="22" alt="Choose your language" />
            </span>
            </li>
            <li className="cart">
              <a id="cart-trigger" href="/es/checkout/cart" rel="nofollow" className='Icono-Cart'>
                <img src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/cart.svg" width="22" height="22" alt="Carrito" />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}
