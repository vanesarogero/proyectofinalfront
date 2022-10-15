
import {
  BrowserRouter, Routes,
  Route,
  useNavigate,
  useLocation,
  useMatch
} from "react-router-dom";
//Components
import { useState } from "react";

import Inicio from "./Pages/Home/Inicio";
import Tienda from "./Pages/tienda/Tienda";
import Carrito from "./Pages/carrito/Carrito";
import SobreNosotros from "./Pages/sobrenosotros/Sobrenosotros";
import Header from "./Permanentes/Header/Header";
import Footer from "./Permanentes/Footer/Footer";
import Formulario from "./Pages/Contacto/Formulario";
import { useEffect } from "react";
import { getAllProducts, getCategories } from "./Services/ShopApi";
import Loader from "./Permanentes/Loader";

function App() {
/**
 * [
 *    { productId: 3,  quantity: 5},
 *    { productId: 6,  quantity: 12},
 * ]
 * 
 */

  const [articulos, setArticulos]       = useState([]);
  const [articulosCarrito, setCarrito]  = useState([]);
  const [categorias, setCategorias]     = useState([]);

  const [buscando, setBuscando] = useState('');

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const addAlCarrito = (articulo) => {
    setCarrito((actualArticulosCarrito)=>{
      //[ {productId: 2, quantity: 6},    {...}   ]
      const nuevoCarrito = structuredClone(actualArticulosCarrito);

      let articuloEnCarrito = nuevoCarrito.find(art => art.productId == articulo.id);
      if (articuloEnCarrito) {
          articuloEnCarrito.quantity += 1;
      } else {
          nuevoCarrito.push({productId: articulo.id, quantity: 1})
      }

      return nuevoCarrito
    })
  }
  const removeDelCarrito = (articulo) => {

    setCarrito((actualArticulosCarrito)=>{
      //[ {productId: 2, quantity: 6},    {...}   ]
      const nuevoCarrito = structuredClone(actualArticulosCarrito);

      let posicionEnCarrito = nuevoCarrito.findIndex(art => art.productId == articulo.id);

      const artIdAndQty = nuevoCarrito[posicionEnCarrito];
      artIdAndQty.quantity -= 1;

      if (artIdAndQty.quantity == 0) {
        nuevoCarrito.splice(posicionEnCarrito, 1)
      }
      
      return nuevoCarrito
    })
      
  }



  useEffect(()=>{
    setLoading(true)
    setMensaje('')

    Promise.all([
      getAllProducts()
        .then(articulos => setArticulos(articulos)),

      getCategories()
        .then(categorias => setCategorias(categorias))
    ]).catch((error) => {
        setMensaje("Error al conectar con el servicio. "
                  +"Compruebe su conexión a internet o inténtelo más tarde")
        setTimeout(()=>setMensaje(''), 5000)
    }).finally(()=>{
      setLoading(false)
    })

  }, [])

  const navigate = useNavigate()
  const enTienda = useMatch('/tienda')
  useEffect(() => {
    if (!enTienda && buscando !== '') {
      navigate('/tienda')
    }
  }, [buscando])


  const propsTienda = {
    categorias,
    articulos, 
    buscando,
    addAlCarrito
  }

  const propsCarrito = {
    articulos,
    articulosCarrito, 
    addAlCarrito,
    removeDelCarrito
  }

  const propsHeader = {
    articulosCarrito,
    buscando,
    setBuscando
  }

  return (
    <>
      <Loader loading={loading} mensaje={mensaje} />

      <Header articulosCarrito={articulosCarrito}
              buscando={buscando}
              setBuscando={setBuscando} />
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/formulario" element={<Formulario setMensaje={setMensaje} />} />
        <Route path="/tienda" element={<Tienda {...propsTienda} />} />
        <Route path="/carrito" element={<Carrito {...propsCarrito} />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
      </Routes>
      
      <Footer />
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