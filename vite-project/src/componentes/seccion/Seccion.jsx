import Tninicio from '../../assets/img/Tnincio.png';
import Boton from '../boton/boton';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from '../carrusel/carrusel';
import tn1 from '../../assets/img/tn1.jpeg'
import tn2 from '../../assets/img/tn2.jpeg'
import './seccion.css'



function Seccion() {
    const headerClickenBoton = () => {
        alert('10% de descuento en tu proxima compra con el codigo:')
    }
    return (
        <div className="d-flex flex-column min-vh-100">
            <section className='seccion'>

            <MyCarousel />
            <div className='texto'>
                
                <p >  Prendas seleccionadas de primer y segunda mano...</p>
            </div>

            <img src={Tninicio} alt="Imagen de la feria" />

            <Boton color="red" texto="CUPON" onClick={headerClickenBoton} />
</section>
        </div>
    );
}

export default Seccion;