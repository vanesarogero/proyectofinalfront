import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';
/*import  from "src/index.css"*/
function Articulo(props) {
    
    return (
        <article className= "card">
        <Card
            key={props.id}
            color="dark"
            outline
            style={{ width: '18rem' }}
        >
            <img alt="Sample" src={props.image} className= "imagen_tienda "/>
            <CardBody>
                <CardTitle tag="h5">
                    {props.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                    {props.category}
                </CardSubtitle>
                <CardText>
                    {props.description}
                    <br />
                    Precio: {props.price}€
                </CardText>
                <Button onClick={()=>{props.addAlCarrito(props)}}>
                    Añadir al carrito
                    </Button>
            </CardBody>
        </Card>
        </article>
    )


    
}



export default Articulo;