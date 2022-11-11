import { useEffect, useState } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardSubtitle, CardTitle, Button, CardText } from 'reactstrap';

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



    let total = 0
    articulosCompletos.forEach(art => {
        total += art.product.price * art.quantity
    })
    total = total.toFixed(2)
    
    
    return(
      <>

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
            <CardText>Revisa que todo este bien</CardText>
            <CardText></CardText>
          </CardImgOverlay>
          
        </Card>
        
        <section className="carrito">
            {articulosCompletos.map(artAndQty =>
                <Card 
                key={artAndQty.product.id}
                color="dark"
                tag='article'
                outline
                style={{ 
                  width: '18rem',
                  
                 }}
            >
                <img alt="Sample" src={artAndQty.product.image} className= "imagen_tienda"/>
                <CardBody>
                    <CardTitle tag="h5">
                        {artAndQty.product.title}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6" >
                        {artAndQty.product.category}
                    </CardSubtitle>
                    <CardText>
                        Precio: {artAndQty.product.price}€
                    </CardText>
                    <div className="botones_compra">
                    <Button className="carrito_card_mas" onClick={()=>props.addAlCarrito(artAndQty.product)}>+</Button>
                    <span className="carrito_card_numero">{artAndQty.quantity}</span>
                    <Button className="carrito_card_menos" onClick={()=>props.removeDelCarrito(artAndQty.product)}>-</Button>
                    </div>
                    <CardText className="total_producto">{ (artAndQty.quantity * artAndQty.product.price).toFixed(2) } €
                    </CardText>
                </CardBody>
            </Card>
               
            )}
            
        </section>
        
        
        <section>
          <CardText className='total'>Total: {total}</CardText>
          <div>
            {articulosCompletos.length === 0 && <p className="noarticulos"> No tienes artículos en el carrito</p>}
            {articulosCompletos.length >= 1 && <Button type ='button' className= 'confirmar_pedido' onClick={confirmacionPedido} >Confirma tu Pedido</Button>}

          </div>
          
        </section>
        </div>
        </>
        
    );


    
}

  