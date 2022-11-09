import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {NavLink} from "react-router-dom"




function Footer() {
    const handleClick = ()=>{
        window.open('https://www.linkedin.com/in/vanesarogero-programadora-front-end/', '_blank')
        }
    return (
        
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                {/* <!-- Section: Social media --> */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* <!-- Left --> */}
                    <div className="me-5 d-none d-lg-block">
                        
                    </div>
                  
                </section>
                {/* <!-- Section: Social media -->

                <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Vane Tienda
                                </h6>
                                <p>
                                    Este es mi proyecto de React en el que tengo que crear una ecommerce, haciendo una llamada a una API para obtener los artículos de la tienda.  
                                </p>
                            </div>
                            

                            
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Links
                                </h6>
                                <p>
                                    <NavLink to="/tienda" className="text-reset">Tienda</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/carrito" className="text-reset">Carrito</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/formulario" className="text-reset">Contactanos</NavLink>
                                </p>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                                <p><i className="fas fa-home me-3"></i> Vanesa rogero paredes</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    vanesarogero@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 34 662 68 40 53</p>
                                <p><i className="fas fa-phone me-3"></i><NavLink className="text-reset" onClick={handleClick} >LINKEDIN</NavLink></p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  -->

                <!-- Copyright --> */}
                <div className="text-center p-4"> 
                <style text="text/css">
                {`.text-center
                 {background-color: rgba(0, 0, 0, 0.05),
                    width="100%";"}`}
                 </style>
                    © 2022 Copyright:

                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>






    );



}

export default Footer;

//https://mdbootstrap.com/docs/standard/navigation/footer/
//primer footer
