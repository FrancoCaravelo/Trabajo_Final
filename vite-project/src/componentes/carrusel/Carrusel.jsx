import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tn1 from '../../assets/img/tn1.jpeg';
import tn2 from '../../assets/img/tn2.jpeg';
import './Carrousel.css'

function MyCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tn1}
                    alt="Slide 1"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tn2}
                    alt="Slide 2"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default MyCarousel;
