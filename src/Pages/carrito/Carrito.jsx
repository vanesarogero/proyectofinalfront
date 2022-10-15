import { useEffect, useState } from "react";

export default function Carrito(props) {
    /*
    [
        {productId: 7,  quantity: 5}
    ]

    [
        {product: {...},  quantity: 5}
    ]
    */
    
    const [articulosCompletos, setArticulosCompletos] = useState([])

    const obtenerArticuloPorId = (id) => {
        return props.articulos.find(art => art.id == id)
    }

    useEffect(()=>{
        const resultado = props.articulosCarrito.map(art => {
            return {
                product: obtenerArticuloPorId(art.productId),
                quantity: art.quantity
            }
        })
        setArticulosCompletos(resultado);
    }, [props.articulosCarrito])
    
    return(
        <section>
            {articulosCompletos.map(artAndQty =>
                <article key={artAndQty.product.id}>
                    <h1>{artAndQty.product.title} (<span>{artAndQty.quantity}</span>)</h1>

                    <button onClick={()=>props.addAlCarrito(artAndQty.product)}>+</button>
                    <button onClick={()=>props.removeDelCarrito(artAndQty.product)}>-</button>
                </article>
            )}
        </section>
    );


    
}