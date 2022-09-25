
import slider1 from './Home/slider1.jpg'
import slider2 from './Home/slider2.jpg'
import slider3 from './Home/slider3.jpg'
import Tienda from './tienda/Tienda'
function Main() {



    return (
       
<>
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={slider1} alt="Sección mujer" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slider2} alt="Sección hombre" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slider3} alt="Electronica" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href={Tienda} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Siguiente</span>
                    </a>
                </div>

</>





    );



}



export default Main;