import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap'
function SobreNosotros() {
    return (

        <div>
            <Card inverse>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/270?grayscale"
                    style={{
                        height: 270
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5">
                        Card Title
                    </CardTitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>


    )
}
export default SobreNosotros;