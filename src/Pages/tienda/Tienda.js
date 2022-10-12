import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';
import { useEffect, useState } from 'react'


function Tienda(props) {
    const [articulos, setArticulos] = useState([])

    useEffect(() => {
        setArticulos(props.datos)
    },[props])

    return (
        <div className='row'>
            {
                articulos.map((articulo) => {
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
                                    <br/>
                                    Precio: {articulo.price}€
                                </CardText>
                                <Button>Añadir al carrito</Button>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default Tienda;