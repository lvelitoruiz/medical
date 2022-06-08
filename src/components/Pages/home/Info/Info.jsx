import React from "react";
//styles
import './info.scss'
//components

const Info = () => {
	return(
		<React.Fragment>
			<section id="home_info">
				<h2 className="title">Brindamos <span className="emphasis">confianza y seguridad</span></h2>

				<div className="card_container">
					<div className="card">
						<div className="card_img">
							<img src="" alt="" />
						</div>
						<p className="card_title">
							Equipos con Sistema de Flujo Digital
						</p>
						<span className="card_content">
							Nuestros equipos radiológicos se integran con laboratorio cad cam formando una red interconectada que permite gestionar el diagnóstico y tratamiento de su paciente.
						</span>
					</div>
					
					<div className="card">
						<div className="card_img">
							<img src="" alt="" />
						</div>
						<p className="card_title">
							Staff con amplia experiencia
						</p>
						<span className="card_content">
							Un staff médico con alto conocimiento de radiología, garantizándole un diagnóstico de primer nivel.
						</span>
					</div>

					<div className="card">
						<div className="card_img">
							<img src="" alt="" />
						</div>
						<p className="card_title">
							Resultados <br /> Online
						</p>
						<span className="card_content">
							Obtendrán los resultados de manera inmediata vía internet a través de nuestra plataforma online.
						</span>
					</div>
				</div>			
			</section>
		</React.Fragment>
	);
}

export  {Info};