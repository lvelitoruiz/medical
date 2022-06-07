import React from "react";

//utils
import { Link } from "gatsby";
//styles 
import './footer.scss'

const Footer = () => {
	return(
		<React.Fragment>
			<footer id="footer">
				<div className="sections_container">

{/* about us section */}
					<section className="section about_us">
						<Link to="">
							<p className="title"><strong>Nosotros</strong></p>
						</Link>
						<Link to="">
							¿Quiénes somos?
						</Link>
						<Link to="">
							Staff
						</Link>
						<Link to="">
							Trabaja con nosotros
						</Link>
					</section>

{/* diagnostic imaging section */}
					<section className="section diagnostic_imaging">
						<Link to="">
							<p className="title"><strong>Diagnóstico en imagenes</strong></p>
						</Link>
						<Link to="">
							Tomografía dental 3D
						</Link>
						<Link to="">
							Radiografías extraorales
						</Link>
						<Link to="">
							Radiografías intraorales
						</Link>
						<Link to="">
							Análisis cafalométricos digitales
						</Link>
						<Link to="">
							Fotografía clínica
						</Link>
						<Link to="">
							Paquetes ortodóncicos
						</Link>
					</section>

{/* digital lab section */}
					<section className="section digital_lab">
						<Link to="">
							<p className="title"><strong>Laboratorio dental digital</strong></p>
						</Link>
						<Link to="">
							Servicio para consultorio
						</Link>
						<Link to="">
							Servicio para laboratiorio
						</Link>
						<Link to="">
							Programa tu orden de trabajo
						</Link>

					</section>

{/* clinical cases section */}
					<section className="section clinical_cases">
						<Link to="">
							<p className="title"><strong>Casos clínicos</strong></p>
						</Link>

						<Link to="">
							Nuestros casos
						</Link>

{/* contact section */}
						<section className="section contact_us">
							<Link to="">
								<p className="title"><strong>Contacto</strong></p>
							</Link>

							<Link to="">
								Nuestras sedes
							</Link>
							
							<div className="contact_phone">
								<p className="title">
									<strong>
										<span className="phone_icon"></span>
										(01) 680 2500
									</strong>
								</p>
							</div>
							<div className="social_links">
								<Link to="">
									<span className="link facebook"></span>
								</Link>
								<Link to="">
									<span className="link instagram"></span>
								</Link>
								<Link to="">
									<span className="link linkedin"></span>
								</Link>
							</div>
						</section>
					</section>
				</div>

{/* copyright section */}
				<div className="copy_section">
					<img src="" alt="" />
					<span>© 2022 MedicalDent - Powered by Whiz latam</span>
				</div>
			</footer>
		</React.Fragment>
	);
}
export { Footer };