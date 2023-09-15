import React, { useState } from 'react';
import './Iconos-Navbar.css'; // Asegúrate de crear este archivo CSS
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const IconosNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const {cart} = useCart();
  const navigate = useNavigate();

  const HandleCartClick = () => {
    setShowModal(true);
  }
  const handleGoToCart = () => {
    navigate('/cart');
    setShowModal(false);
  }
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
      <li className='icon-item' onClick={HandleCartClick}>
        <img src={`${process.env.PUBLIC_URL}/cart.svg`} alt="Cart-Icon" />
        {cart.length > 0 && <span className="cart-counter">{cart.length}</span>}
      </li>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Selección Guardada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length > 0 ? (
            <div>Selección Guardada: {JSON.stringify(cart)}
            <button onClick={handleGoToCart}>Ir al carrito</button>
            </div>
          ) : (
            <div>Ninguna selección guardada</div>
          )}
        </Modal.Body>
      </Modal>
    </ul>
  );
}

export default IconosNavbar;
