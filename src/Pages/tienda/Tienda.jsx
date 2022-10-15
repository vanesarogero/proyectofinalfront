import { useEffect, useState } from 'react'
import Articulo from './Articulo'

// ThoughtWorks  CSS
// Nuria Soriano   codely

function Tienda(props) {

    const [categoriaActual, setCategoriaActual] = useState('todas')
    const [articulosFiltrados, setArticulosFiltrados] = useState(props.articulos)

    useEffect(()=>{
        if (props.buscando !== '') {
            const articulosEncontrados = []
               // props.articulos.filter(art => art.title.includes(props.buscando))

            for(let i = 0; i < props.articulos.length; i++) {
                const art = props.articulos[i];
                if (art.title.toLowerCase().includes(props.buscando.toLowerCase())
                 || art.description.toLowerCase().includes(props.buscando.toLowerCase())) {
                    articulosEncontrados.push(art);
                }
            }
            
            setArticulosFiltrados(articulosEncontrados)
        } else if (categoriaActual == 'todas') {
            setArticulosFiltrados(props.articulos);
        } else {
            const articulosDeLaCategoria = []
            for(let i = 0; i < props.articulos.length; i++) {
                if(props.articulos[i].category == categoriaActual) {
                    articulosDeLaCategoria.push(props.articulos[i])
                }
            }
            setArticulosFiltrados(articulosDeLaCategoria)
        }
        // Opción funcional 1
        // const articulosDeLaCategoria = []
        //     props.articulos.filter(art => art.category == categoriaActual)
        
        /*
        Opción funcional 2
        props.articulos.forEach(art => {
            if(art.category == categoriaActual) {
                articulosDeLaCategoria.push(art);
            }
        })*/

    }, [props.buscando, props.articulos, categoriaActual])

    return (
        <section>
            {props.buscando === '' &&
            <select name="" 
                    id=""
                    onChange={(evt)=>setCategoriaActual(evt.target.value)}>
                <option value="todas">Todas</option>
                {props.categorias.map(categoria =>
                    <option key={categoria} value={categoria}>{categoria}</option>
                )}
            </select>}

            {props.buscando !== '' &&
            <p>Resultados de "{props.buscando}"</p>
            }

            <section className='row'>
                {
                    articulosFiltrados.map(articulo => 
                        <Articulo id={articulo.id}
                                  title={articulo.title}
                                  category={articulo.category}
                                  description={articulo.description}
                                  price={articulo.price}
                                  image={articulo.image}
                                  addAlCarrito={props.addAlCarrito}/>
                    )
                }
            </section>
        </section>
    );
}

export default Tienda;