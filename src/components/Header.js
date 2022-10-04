
import { Route, BrowserRouter as Router, Link, BrowserRouter, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';


import Carrito from './carrito/Carrito';
import Formulario from './formulario/Formulario';
import Inicio from './Home/Inicio';
import Tienda from './tienda/Tienda';

function Header(args) {


  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://www.google.es">Vane tienda</a>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
              {/* <a className="nav-link active" aria-current="page" href="http://www.google.es">Home</a> */}
            </li>
            <li className="nav-item">
            <NavLink to="/tienda" className="nav-link">Tienda</NavLink>
              {/* <a className="nav-link" href="http://www.google.es">Tienda</a> */}
            </li>
            <li className="nav-item">
              <NavLink to="/carrito" className="nav-link">Carrito</NavLink>
              {/* <a className="nav-link active" aria-current="page" href="http://www.google.es">Carrito</a> */}
            </li>
            <li className="nav-item">
            <NavLink to="/formulario" className="nav-link">Formulario</NavLink>
              {/* <a className="nav-link active" aria-current="page" href="http://www.google.es">Contacta con nosotros</a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="http://www.google.es">Sobre nosotros</a>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscador de artículos " aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscador</button>
          </form>
        </div>
      </div>
    </nav >


  );
}

export default Header;



