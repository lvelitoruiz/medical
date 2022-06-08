import React from "react";
//styles
import './testimonial.scss'
//components

const Testimonial = () => {
	return(
		<React.Fragment>
			<section id="home_testimonials" className="">
				<div className="container">
					<div className="row">
						<div className="col">

							<h2 className="title"><span className="emphasis">Testimonio de nuestros clientes</span></h2>
							
							<div className="card_container">
								<div className="card">
									<div className="img_container">
										<div className="center">
											<img src="" alt="" />
										</div>
										<img src="" alt="" />
									</div>
									<div className="content">

										<div className="card_icon">
											<img src="" alt="" />
										</div>

										<p className="content_title">El laboratorio tiene acabados de primera.</p>
										<span className="content_description">son puntuales en la hora de entrega del caso, cuentan con una excelente comunicación y coordinación.</span>

										<div className="more_info">
											<p className="title">Walter Peña Gonzales - C.O.P. 11565</p>
											<span className="">Clínica Dental DENTISAN</span>
										</div>
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

export  {Testimonial};