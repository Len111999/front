import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { Navbar } from '../navegacion/Navbar';
import { Footer } from '../Footer/Footer';
import { useSelection } from '../Context/SelectionContext';

const Cart = () => {
  const { cart } = useCart();
  const {addItemToSelection} = useSelection();
  const getTotalPrice = () => {
    let total = 0;
    for (const producto of cart) {
      total += producto.price;
    }
    return total;
  };
  const [formData, setFormData] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiration: '',
    cvv: ''
  });
  const [errorMessages, setErrorMessages] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiration: '',
    cvv: ''
  });
  
  const [envioExitoso, setEnvioExitoso] = useState(false);

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validaciones
    if (name === 'cardNumber') {
      if (!/^\d{0,16}$/.test(value)) {
        setErrorMessages({
          ...errorMessages,
          [name]: 'Escribe solo números y máximo 16 dígitos.'
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          [name]: ''
        });
      }
    }
    if (name === 'nameOnCard') {
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          setErrorMessages({
            ...errorMessages,
            [name]: 'Ingresa solo letras y espacios.'
          });
        } else {
          setErrorMessages({
            ...errorMessages,
            [name]: ''
          });
        }
    }
    if (name === 'expiration') {
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
          setErrorMessages({
            ...errorMessages,
            [name]: 'Ingrese una fecha de expiración válida (MM/YY).'
          });
        } else {
          setErrorMessages({
            ...errorMessages,
            [name]: ''
          });
        }
      }
      if (name === 'cvv') {
        if (!/^\d{3}$/.test(value)) {
          setErrorMessages({
            ...errorMessages,
            [name]: 'Ingrese un CVV válido (3 dígitos numéricos).'
          });
        } else {
          setErrorMessages({
            ...errorMessages,
            [name]: ''
          });
        }
      }
    // Otras validaciones para los demás campos...
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Realizamos las validaciones antes de enviar los datos
    if (formData.cardNumber.length !== 16) {
      setErrorMessages(prevState => ({
        ...prevState,
        cardNumber: 'El número de tarjeta debe tener 16 dígitos.'
      }));
      return;
    }

    if (formData.nameOnCard.trim() === ''&& formData.expiration.length !== 10) {
      setErrorMessages(prevState => ({
        ...prevState,
        nameOnCard: 'Por favor, ingresa el nombre en la tarjeta.'
      }));
      return;
    }

    if (formData.expiration.length !== 5 || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiration)) {
      setErrorMessages(prevState => ({
        ...prevState,
        expiration: 'Ingrese una fecha de expiración válida (MM/YY).'
      }));
      return;
    }

    if (formData.cvv.length !== 3) {
      setErrorMessages(prevState => ({
        ...prevState,
        cvv: 'El CVV debe tener 3 dígitos.'
      }));
      return;
    }
    try {
        await addItemToSelection({
          productos: cart,
        });
      
        setEnvioExitoso(true);
      } catch (error) {
        console.error('Error al realizar la compra', error);
      }
  };

  return (
    <div className='Pago'>
      <Navbar />
      <section className="h-100 h-custom" style={{ backgroundColor: '#eee', marginTop: '80px' }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card shopping-cart" style={{ borderRadius: '15px' }}>
                <div className="card-body text-black">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                      {cart.map((producto, index) => (
                        <div key={index} className="d-flex align-items-center mb-5">
                          <div className="flex-shrink-0">
                            <img src={producto.src} className="img-fluid" style={{ width: '150px' }} alt="Product" />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="text-primary">{producto.alt}</h5>
                            <div className="d-flex align-items-center">
                              <p className="fw-bold mb-0 me-5 pe-3">{producto.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <hr className="mb-4" style={{ height: '2px', backgroundColor: '#1266f1', opacity: '1' }} />
                      <div className="d-flex justify-content-between p-2 mb-2" style={{ backgroundColor: '#e1f5fe' }}>
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">{`$${getTotalPrice().toFixed(2)}`}</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>
                      <form className="mb-5" onSubmit={handleSubmit}>
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg"
                            size="17"
                            minLength="16"
                            maxLength="16"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="typeText">Card Number</label>
                          <div className="text-danger">{errorMessages.cardNumber}</div>
                        </div>
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            id="typeName"
                            className="form-control form-control-lg"
                            size="17"
                            name="nameOnCard"
                            minLength="10"
                            maxLength="10"
                            value={formData.nameOnCard}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="typeName">Card Name</label>
                          <div className="text-danger">{errorMessages.nameOnCard}</div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="typeExp"
                                className="form-control form-control-lg"
                                size="4"
                                minLength="5"
                                maxLength="5"
                                name="expiration"
                                value={formData.expiration}
                                onChange={handleInputChange}
                              />
                              <label className="form-label" htmlFor="typeExp">Expiration</label>
                              <div className="text-danger">{errorMessages.expiration}</div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input
                                type="password"
                                id="typeText"
                                className="form-control form-control-lg"
                                size="1"
                                minLength="3"
                                maxLength="3"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                              />
                              <label className="form-label" htmlFor="typeText">Cvv</label>
                              <div className="text-danger">{errorMessages.cvv}</div>
                            </div>
                          </div>
                        </div>
                        <p className="mb-5">No temas en comprar, <a href="#!">no me quedare con los datos de tu tarjeta</a>.</p>
                        <button type="submit" className="btn btn-primary btn-block btn-lg">Buy now</button>
                      </form>
                      {envioExitoso && <div className="alert alert-success">Datos enviados con éxito</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
