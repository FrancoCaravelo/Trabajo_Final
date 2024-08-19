import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tnventa1 from '../../assets/img2/tnventa1.jpeg';
import tnventa2 from '../../assets/img2/tnventa2.jpeg';
import tnventa3 from '../../assets/img2/tnventa3.jpeg';
import tnventa4 from '../../assets/img2/tnventa4.jpeg';
import tnventa5 from '../../assets/img2/tnventa5.jpeg';
import tnventa6 from '../../assets/img2/tnventa6.jpeg';

function Indumentaria() {
  const initialItems = [
    { id: 1, img: tnventa1, title: 'Nike TN WHITE', price:  350000, discountApplied: false },
    { id: 2, img: tnventa2, title: 'Nike TN VIOLETA', price: 350000, discountApplied: false },
    { id: 3, img: tnventa3, title: 'Nike AirMax 95', price: 350000, discountApplied: false },
    { id: 4, img: tnventa4, title: 'Nike TN ', price: 350000, discountApplied: false },
    { id: 5, img: tnventa5, title: 'Nike TN BYV', price: 350000, discountApplied: false },
    { id: 6, img: tnventa6, title: 'Nike TN GREY', price: 350000, discountApplied: false },
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
            <h2>CALZADO</h2>
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
