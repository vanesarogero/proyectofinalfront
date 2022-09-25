import { useEffect, useState } from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import Tienda from '../tienda/Tienda'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'


function Inicio() {

    const [categorias, setCategorias] = useState([])
    const [articulos, setArticulos] = useState([])

    const [data, setData] = useState([])
    /* useEffect debe de estar en el compononte tienda directamente*/
    async function peticionAppi() {
        await fetch("https://fakestoreapi.com/products")
            .then((res) => { debugger; res.json() })
            .then((datos) => {
                setData(datos);
                let categoriasVacias = [];
                datos.forEach((element) => {
                    if (!categoriasVacias.includes(element.category)) {
                        categoriasVacias.push(element.category);
                    }
                });
                setCategorias(categoriasVacias);
            })
    }
    useEffect(() => {
        peticionAppi()



    }, [])

    function filtrarArticulos(categoria) {

        let articulosFinales = []
        data.forEach(articulo => {
            if (articulo.category == categoria) {
                articulosFinales.push(articulo)
            }

        })
        setArticulos(articulosFinales)



        return (
            <>
                {/* <select id="select_categorias" onChange={(e) => (filtrarArticulos(e.target.value))}>
                    {categorias.map((item, index) => {
                        return <option value={item}>{item}</option>;
                    })}
                </select> <Tienda datos={articulos}></Tienda>*/}

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={slider1} alt="Sección mujer" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slider2} alt="Sección hombre" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slider3} alt="Electronica" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href={Tienda} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Siguiente</span>
                    </a>
                </div>



            </>





        );



    }
}


export default Inicio;