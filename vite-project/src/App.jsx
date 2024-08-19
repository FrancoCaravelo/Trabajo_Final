import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";
import Seccion from "./componentes/seccion/Seccion";
import ListaSALE from './componentes/SALE/ListaSALE';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calzado from './componentes/Calzado/Calzado';
import Indumentaria from './componentes/Indumentaria/Indumentaria';

import React from 'react';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/ListaSALE" element={<ListaSALE />} />
            <Route path="/Calzado" element={<Calzado />} />
            <Route path="/Indumentaria" element={<Indumentaria />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
