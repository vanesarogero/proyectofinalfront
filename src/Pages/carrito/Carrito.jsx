import { useEffect, useState } from "react";
import {Card, CardImg, CardImgOverlay,CardTitle, CardText, Button} from "reactstrap";

import fotocarrito from './fotocarrito.jpg';


export default function Carrito(props) {
    /*
    [
        {productId: 7,  quantity: 5}
    ]

    */
    
  
    const confirmacionPedido = () => {
      
      
      props.setMensaje('Nos ponemos manos a la obra. Gracias por la confianza depositada en nosotros.')
      setTimeout(()=>{
        props.setMensaje('')
      }, 4000)
    }



    
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
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={fotocarrito}
            style={{
              height: 450
            }}
            width="100%"
          />
          <CardImgOverlay>
            <CardTitle tag="h5">
              Carrito
            </CardTitle>
            <CardText>
              Revisa que todo este bien
            </CardText>
            <CardText>
              
            </CardText>
          </CardImgOverlay>
          
        </Card>
        
        


      
        <section>
            {articulosCompletos.map(artAndQty =>
                <article key={artAndQty.product.id}>
                    <h1>{artAndQty.product.title} (<span>{artAndQty.quantity}</span>)</h1>

                    <button onClick={()=>props.addAlCarrito(artAndQty.product)}>+</button>
                    <button onClick={()=>props.removeDelCarrito(artAndQty.product)}>-</button>
                </article>
            )}
            
        </section>
        
        
        <Button onClick={confirmacionPedido}>Confirma tu Pedido</Button>
        </div>
        
    );


    
}

  