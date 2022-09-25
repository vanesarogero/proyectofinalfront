
import { Route, BrowserRouter as Router, Link, BrowserRouter } from 'react-router-dom';
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
        <a className="navbar-brand" href="#">Vane tienda</a>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={Inicio}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Tienda}>Tienda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={Carrito}>Carrito</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="{Formulario}">Contacta con nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="{}">Sobre nosotros</a>
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



