import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';

function Articulo(props) {
    
    return (
        <Card
            key={props.id}
            color="dark"
            outline
            style={{ width: '18rem' }}
        >
            <img alt="Sample" src={props.image} />
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
    )


    
}



export default Articulo;