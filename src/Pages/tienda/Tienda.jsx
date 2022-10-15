import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';
import { useEffect, useState } from 'react'

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
                    articulosFiltrados.map((articulo) => {
                        return (
                            <Card
                                key={articulo.id}
                                color="dark"
                                outline
                                style={{ width: '18rem' }}
                            >
                                <img alt="Sample" src={articulo.image} />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {articulo.title}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6" >
                                        {articulo.category}
                                    </CardSubtitle>
                                    <CardText>
                                        {articulo.description}
                                        <br />
                                        Precio: {articulo.price}€
                                    </CardText>
                                    <Button onClick={()=>{props.addAlCarrito(articulo)}}>
                                        Añadir al carrito
                                        </Button>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </section>
        </section>
    );
}

export default Tienda;