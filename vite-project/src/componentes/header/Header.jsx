import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">HUMANOIDES FERIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/.">Inicio</Nav.Link>
            <Nav.Link href="/ListaSALE">SALE</Nav.Link>
            <Nav.Link href="/Indumentaria">Indumentaria</Nav.Link>
            <Nav.Link href="/Calzado">Calzado</Nav.Link>
            
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;