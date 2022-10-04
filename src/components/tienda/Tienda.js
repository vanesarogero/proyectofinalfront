import { useEffect, useState } from 'react'
import Inicio from '../Home/Inicio'


function Tienda() {

    const [categorias, setCategorias] = useState([])
    const [articulos, setArticulos] = useState([])
    const [data, setData] = useState([])
    
    useEffect(() => {

    },[articulos])

    useEffect(() => {
        
        const peticionApi = async () => {
            return await fetch("https://fakestoreapi.com/products", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        };
        
        const updateDatos = (datos) => {
            if(datos){
                setData(datos);
                let categoriasVacias = [];
                datos.forEach((element) => {
                    if (!categoriasVacias.includes(element.category)) {
                        categoriasVacias.push(element.category);
                    }
                });
                setCategorias(categoriasVacias);
            }
        }

        async function fetchDatos(){
            const response = await peticionApi()
            const json = await response.json();
            updateDatos(json);
        }

        fetchDatos();
        
    }, [])
    

    function filtrarArticulos(categoria) {
        let articulosFinales = []
        data.forEach(articulo => {
            if (articulo.category == categoria) {
                articulosFinales.push(articulo)
            }
        })
        setArticulos([...articulosFinales])
    }

    return (
        <>
            <select id="select_categorias" onChange={(e) => (filtrarArticulos(e.target.value))}>
                {categorias.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>;
                })}
            </select>
            <Tienda datos={articulos}></Tienda>
        </>
    );
}

export default Tienda;