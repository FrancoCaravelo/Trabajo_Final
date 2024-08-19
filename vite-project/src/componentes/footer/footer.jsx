
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <h5>Pandora Feria</h5>
            <p>Ofrecemos una selección de los mejores productos de moda.</p>
          </Col>
          <Col md={4} sm={12}>
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Inicio</a></li>
              <li><a href="/SALE" className="text-white">SALE</a></li>
              <li><a href="/Calzado" className="text-white">Calzado</a></li>
              <li><a href="/Indumentaria" className="text-white">Indumentaria</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h5>Contacto</h5>
            <p>Email: info@pandoraferia.com</p>
            <p>Teléfono: +123 456 7890</p>
            <p>Dirección: Calle Falsa 123, Ciudad, País</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p>&copy; 2024 Pandora Feria. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;