import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import indu1 from '../../assets/img/indu1.jpeg';
import indu2 from '../../assets/img/indu2.jpeg';
import indu3 from '../../assets/img/indu3.jpeg';
import indu4 from '../../assets/img/indu4.jpeg';
import indu5 from '../../assets/img/indu5.jpeg';
import indu6 from '../../assets/img/indu6.jpeg';


function Indumentaria() {
  const initialItems = [
    { id: 1, img: indu1, title: 'Campera Started', price:60000, discountApplied: false },
    { id: 2, img: indu2, title: 'Camiseta Jacksonville', price:15000, discountApplied: false },
    { id: 3, img: indu3, title: 'Chomba NC State', price:30000, discountApplied: false },
    { id: 4, img: indu4, title: 'Campera Dickies ', price:70000, discountApplied: false },
    { id: 5, img: indu5, title: 'Campera Gigants', price:50000, discountApplied: false },
    { id: 6, img: indu6, title: 'Puffer Black', price:60000, discountApplied: false },
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
            <h2>INDUMENTARIA</h2>
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
