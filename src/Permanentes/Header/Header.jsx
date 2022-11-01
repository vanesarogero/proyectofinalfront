
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';


function Header(props) {


  const cantidadDeArticulosEnCarrito = () => {
    let suma = 0;

    props.articulosCarrito.forEach((art) => {
      suma += art.quantity;
    })

    return suma;
  }

  const buscadorHandler = (evt) => {
    const textoBusqueda = evt.target.value.trim()
    props.setBuscando(textoBusqueda)
  }


  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink to="/tienda" className="navbar-brand">Vane tienda</NavLink>

      <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
            </li> 
          <li className="nav-item">
            <NavLink to="/tienda" className="nav-link">Tienda</NavLink>
            
          </li>
          <li className="nav-item">
            <NavLink to="/carrito" className="nav-link">Carrito ({cantidadDeArticulosEnCarrito()})</NavLink>
            
          </li>
          <li className="nav-item">
            <NavLink to="/formulario" className="nav-link">Formulario</NavLink>
                      </li>
          <li className="nav-item">
            <NavLink to="/sobrenosotros" className="nav-link">Sobre nosotros</NavLink>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2"
            type="search"
            placeholder="Buscador"
            aria-label="Search"
            onChange={buscadorHandler} />

        </form>
      </div>
    </div>
    </nav>


  );
}

export default Header;



