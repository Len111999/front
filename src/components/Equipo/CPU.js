import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Pantalla.css';
import { useCart } from '../Context/CartContext';

const images = [
  { id: 1, src: '/CPU1.webp', alt: 'PcCom iCUE i7', price: 2967.72},
  { id: 2, src: '/CPU2.webp', alt: 'PcCom Ready Ryzen 5', price: 1049.24 },
  { id: 3, src: '/CPU3.webp', alt: 'PcCom Imperial i7 ', price: 1084.81 },
  { id: 4, src: '/CPU4.webp', alt: 'PcCom Lite i5', price: 1171.01 },
];

const CPU = ({updateTotalPrice, setSelectedCPU}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [pantallaSeleccionada, setPantallaSeleccionada] = useState(false);
  const {addToCart, removeFromCart } = useCart();

  const handleAddClick = (image) => {
    if (selectedImage) {
      // Si ya se seleccionó una pantalla, mostrar el mensaje de error
      setShowErrorMessage(true);
    } else {
      setSelectedImage(image);
      setShowDetails(false);
      setPantallaSeleccionada(true);
      updateTotalPrice(Number(image.price.toFixed(2)));
      setSelectedCPU(image);
      addToCart(image);
    }
  };

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const handleCloseErrorMessage = () => {
    setShowErrorMessage(false);
  };

  const handleDeleteClick = () => {
    if (selectedImage) {
      updateTotalPrice(Number(-selectedImage.price.toFixed(2))); // Resta el precio de la pantalla eliminada
      setSelectedImage(null);
      setPantallaSeleccionada(false);
      removeFromCart(selectedImage);
    }
  };
  
  return (
    <Row xs={1} md={2} className="g-4">
      {images.map((image, idx) => (
        <Col key={idx}>
          <Card style={{ width: '12.5rem', height: '100%' }}>
            <Card.Img variant="top" src={image.src} alt={image.alt} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{image.alt}</Card.Title>
              <div className="d-flex justify-content-between">
                <Button variant="primary" onClick={() => handleAddClick(image)}>
                  Añadir
                </Button>
                <Card.Text style={{ color: 'red' }}>{image.price}€</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {selectedImage && (
        <div className="selected-image-container">
          <img src={selectedImage.src} alt={selectedImage.alt} style={{ width: '70vh' }} />
          <div>
            <div>
              <p>{selectedImage.alt}</p>
            </div>
            <div className="ms-auto">
              <Button variant="primary" onClick={handleDetailsClick}>
                Detalles
              </Button>
              {pantallaSeleccionada && (
                <Button variant="danger" onClick={handleDeleteClick}>
                  Eliminar
                </Button>
              )}
            </div>
            <Modal show={showDetails} onHide={handleCloseDetails}>
              <Modal.Header closeButton>
                <Modal.Title>Especificaciones</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ul>
                  <li>Tamaño del panel: 27" (69 cm)</li>
                  <li>Resolución del panel: 1920 x 1080 (FHD)</li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDetails}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      )}
      <Modal show={showErrorMessage} onHide={handleCloseErrorMessage}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Solo puedes escoger una pantalla.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorMessage}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default CPU;

