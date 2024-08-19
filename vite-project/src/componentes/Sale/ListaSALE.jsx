import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sale1 from '../../assets/img/sale1.jpeg';
import sale2 from '../../assets/img/sale2.jpeg';
import sale3 from '../../assets/img/sale3.jpeg';
import sale4 from '../../assets/img/sale4.jpeg';
import sale5 from '../../assets/img/sale5.jpeg';
import sale6 from '../../assets/img/sale6.jpeg';

function Indumentaria() {
  const initialItems = [
    { id: 1, img: sale1, title: 'Conjunto Nike ', price:10000, discountApplied: false },
    { id: 2, img: sale2, title: 'Campera Nike', price:70000, discountApplied: false },
    { id: 3, img: sale3, title: 'Camiseta Cruzers', price:20000, discountApplied: false },
    { id: 4, img: sale4, title: 'Remera Corona Mexico', price:12000, discountApplied: false },
    { id: 5, img: sale5, title: 'Remera GoldenStateWarrios', price:18000, discountApplied: false },
    { id: 6, img: sale6, title: 'Chomba PGA', price:22000, discountApplied: false },
  ];

  const [items, setItems] = useState(initialItems);

  const handleAddToCart = (title) => {
    alert(`¡${title} ha sido agregado al carrito!`);
  };

  const applyDiscount = (id) => {
    setItems(items.map(item => 
      item.id === id && !item.discountApplied
        ? { ...item, price: item.price * 0.9, discountApplied: true }
        : item
    ));
  };

  return (
    <div className="d-flex flex-column flex-grow-1">
      <main className="flex-grow-1">
        <section className="seccion">
          <div className="texto">
            <h2> SALE </h2>
            <Row xs={1} md={3} className="g-4">
              {items.map(item => (
                <Col key={item.id}>
                  <Card>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>Precio: ${item.price.toFixed(2)}</Card.Text>

                      <Button 
                        variant="success" 
                        className="w-100 mb-2"
                        onClick={() => applyDiscount(item.id)}
                        disabled={item.discountApplied}
                      >
                        {item.discountApplied ? 'Descuento Aplicado' : 'Aplicar 10% de Descuento'}
                      </Button>

                      <Button 
                      variant="secondary" 
                      className="ms-2" 
                      onClick={() => handleAddToCart(item.title)}
                    >
                      Agregar al carrito
                    </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Indumentaria;
