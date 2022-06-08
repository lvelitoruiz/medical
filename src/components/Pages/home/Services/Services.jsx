import React from "react";
//styles
import './services.scss';
//components
import { Link } from "gatsby";

const Services = () => {
	return(
		<React.Fragment>
			<section id="home_services">
				<div className="container">
					<div className="row">
						<div className="col">

							<h2 className="title"><span className="emphasis">Nuestros servicios</span></h2>

							<div className="selector_container">
								<div className="first ">
									<span className="icon"></span>
									<p>Diagnóstico <br /> en imágenes</p>
								</div>

								<div className="second selected">
									<span className="icon"></span>
									<p>Laboratorio <br /> dental digital</p>
								</div>

								<div className="third ">
									<span className="icon"></span>
									<p>Insumos <br /> dentales</p>
								</div>
							</div>

							<div className="slider_container"> 
								<div className="card">
									<div className="card_img">
										<img src="" alt="" />
									</div>
									<p className="card_title">Servicio para <br /> consultorio</p>
									<Link to="" className="see_more">Ver más <span className="see_more_icon"></span></Link>
								</div>

								<div className="card">
									<div className="card_img">
										<img src="" alt="" />
									</div>
									<p className="card_title">Servicio para <br /> laboratorio</p>
									<Link to="" className="see_more">Ver más <span className="see_more_icon"></span></Link>
								</div>

								<div className="card">
									<div className="card_img">
										<img src="" alt="" />
									</div>
									<p className="card_title">Programa tu <br /> orden de trabajo</p>
									<Link to="" className="see_more">Ver más <span className="see_more_icon"></span></Link>
								</div>

								<div className="slider_buttons">
									<div className="left">
										<span className="icon"> 0 </span>
									</div>
									<div className="right">
										<span className="icon"> 0 </span>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export  {Services};