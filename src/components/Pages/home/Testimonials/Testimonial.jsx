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
							
							<div className="slider_container"> 
								<div className="card">
									<div>
										<h3 className="card--title">Clínica Dental Vértiz</h3>
										<span className="card--tag">Diagnóstico por imágenes</span>
										<p className="card--paragraph">“En Medical Dent encontramos, un buen aliado para poder complementar los Diagnósticos de los pacientes, estoy muy contenta con el servicio y con la atención que nos brindan”.</p>
									</div>
									<div>
										<p className="card--text1">Dra. Ana Trujillo Vértiz</p>
										<p className="card--paragraph">C.O.P: 26570 - R.N.E 2435</p>
									</div>
								</div>

								<div className="card">
									<div>
										<h3 className="card--title">Santana Odontología</h3>
										<span className="card--tag">Diagnóstico por imágenes</span>
										<p className="card--paragraph">“En primer lugar debo agradecerles a ustedes la atención. Mi paciente quedo feliz y su papá más.  Me hizo mucho hincapié en la modernidad de los equipos y en el buen trato hacia ambos”.</p>
									</div>
									<div>
										<p className="card--text1">Dra. Ana Trujillo Vértiz</p>
										<p className="card--paragraph">C.O.P: 26570 - R.N.E 2435</p>
									</div>
								</div>

								<div className="card">
									<div>
										<h3 className="card--title">Consultorio Privado</h3>
										<span className="card--tag">Diagnóstico por imágenes</span>
										<p className="card--paragraph">“Si tenemos buena imagen tenemos buen resultado. Eso es MedicalDent Callao”.</p>
									</div>
									<div>
										<p className="card--text1">Dra. Ana Trujillo Vértiz</p>
										<p className="card--paragraph">C.O.P: 26570 - R.N.E 2435</p>
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