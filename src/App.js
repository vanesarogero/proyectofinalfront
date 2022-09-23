
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
//Components
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Tienda from './components/tienda/Tienda';
import Formulario from './components/formulario/Formulario';
import Carrito from './components/carrito/Carrito';
import Inicio from './components/Home/Inicio';

function App() {


  




return (
  <>



    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Inicio/>} /> 
        <Route path="/formulario" element={<Formulario />} />


      </Routes>
    </BrowserRouter>













  </>
);
}

export default App;
//(Revisar esto para el fallo de consola)https://es.reactjs.org/docs/lists-and-keys.html#gatsby-focus-wrapper

/*/* Esto se encontraba en el main antes de crear las rutas.*/


/*<select id="select_categorias" onChange={(e) => (filtrarArticulos(e.target.value))}>
{categorias.map((item, index) => {
  return <option value={item}>{item}</option>;
})}
</select>*/