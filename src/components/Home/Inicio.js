import { useEffect, useState } from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import Tienda from '../tienda/Tienda'
function Inicio() {

    const [categorias, setCategorias] = useState([])
    const [articulos, setArticulos] = useState([])

    const [data, setData] = useState([])
    /* useEffect debe de estar en el compononte tienda directamente*/
    async function peticionAppi() {
        await fetch("https://fakestoreapi.com/products")
            .then((res) => {debugger; res.json()})
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
                <select id="select_categorias" onChange={(e) => (filtrarArticulos(e.target.value))}>
                    {categorias.map((item, index) => {
                        return <option value={item}>{item}</option>;
                    })}
                </select>
                <Tienda datos={articulos}></Tienda>



            </>





        );



    }
}


    export default Inicio;