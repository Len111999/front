import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Pantalla.css';

const images = [
  { id: 1, src: '/Mouse1.webp', alt: 'Razer Deathadder Essential Ratón Gaming 6400 DPI', price: 24.99},
  { id: 2, src: '/Mouse2.webp', alt: 'Tempest X6 Guardian RGB Ratón Gaming 10.000 DPI Negro', price: 11.99 },
  { id: 3, src: '/Mouse3.webp', alt: 'Razer Basilisk V3 Ratón Gaming Óptico RGB 26000 DPI', price: 59.99 },
  { id: 4, src: '/Mouse4.webp', alt: 'Forgeon Vendetta Ratón Gaming RGB 16000DPI Negro', price: 36.99 },
];

const Mouse = ({updateTotalPrice, setSelectedMouse}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [pantallaSeleccionada, setPantallaSeleccionada] = useState(false);

  const handleAddClick = (image) => {
    if (selectedImage) {
      // Si ya se seleccionó una pantalla, mostrar el mensaje de error
      setShowErrorMessage(true);
    } else {
      setSelectedImage(image);
      setShowDetails(false);
      setPantallaSeleccionada(true);
      updateTotalPrice(Number(image.price.toFixed(2)));
      setSelectedMouse(image);
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
    }
  };
  
  return (
    <Row xs={1} md={2} className="g-4">
      {images.map((image, idx) => (
        <Col key={idx}>
          <Card style={{ width: '12.5rem', height: '100%' }}>
            <Card.Img variant="top" src={image.src} alt={image.alt} />
            <Card.Body classalt="d-flex flex-column">
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

export default Mouse;

