import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import item1 from "../assets/img/casos-clinicos1.png";

import {
  faArrowLeft,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons'


import {
	faFacebookF,
	faLinkedinIn,
	faTwitter
}	from '@fortawesome/free-brands-svg-icons'

const Caso = () => {
	return(
		<React.Fragment>
			<Navbar />
			<section className="container">
				<div className="row pt-[120px]">
					<div className="col-12 col-md-6 mb-[15px] md:mb-0">
						<Link className="flex items-center" to="/casos-clinicos">
							<FontAwesomeIcon className="text-[#607D8B] mr-[7px]" icon={faArrowLeft} />
							<span className="text-black text-[16px] font-semibold">Regresar a Casos clínicos</span>
						</Link>
					</div>
				</div>
				<div className="row justify-center pt-[48px]">
					<div className="col-lg-8">
						<div className="row">
							<div className="col-12">
								<h1 className="text-center font-semibold text-[30px] lg:text-[40px] text-[#607D8B] leading-[38px] lg:leading-[48px]">Planificación para implantes con tomografía odontológica</h1>
							</div>
							<div className="col-12 pt-[48px]">
								<div className="flex items-center justify-center">
									<p className="text-[#B0BEC5]">Compartir:</p>
									<div className="flex items-center ml-[10px]">
										<a href="">
											<FontAwesomeIcon className="text-[#B0BEC5] mr-[16px]" icon={faFacebookF} />
										</a>
										<a href="">
											<FontAwesomeIcon className="text-[#B0BEC5] mr-[16px]" icon={faLinkedinIn} />
										</a>
										<a href="">
											<FontAwesomeIcon className="text-[#B0BEC5] mr-[16px]" icon={faTwitter} />
										</a>
										<a href="">
											<FontAwesomeIcon className="text-[#B0BEC5] mr-[16px]" icon={faEnvelope} />
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-12 pt-[48px]">
								<img className="w-full h-[332px] lg:h-[632px] rounded-[30px] mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
							</div>
							<div className="col-lg-12">
								<p className="text-center text-[16px] text-[#455A64] leading-[24px] my-[64px]">Paciente de 45 años de sexo masculino acude al servicio para evaluación con tomografía odontológica y planificación de implantes en maxilar superior e inferior. En la evaluación de la radiografía Panorámica (FIG. 1) se evidencia imagen radiopaca de densidad de tejidos blandos en seno maxilar del lado izquierdo compatible con Quiste de retención mucoso. En maxilar inferior Imagen radiopaca de contenido irregular con halo radiolúcido localizado en cuerpo mandibular en relación a ápice de pieza 35 que condiciona la aparente reabsorción de superficie mesial radicular a descartar Odontoma vs. Displasia ósea. En las adquisiciones de cortes tomográficos no se evidencia presencia de otras lesiones con relación a la localización de implantes en zonas correspondiente a pieza 13,23,46 el cual se realiza mediante cortes seccionales en vista coronales y sagitales. Utilizando el Software Xelis Dental. (FIG. 2, 3, 4)</p>
							</div>
						</div>
						<div className="row border-b border-solid border-smoke pb-[30px]">
							<div className="col-md-6 mb-[32px]">
								<img className="w-full h-[300px] rounded-lg mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
							</div>
							<div className="col-md-6 mb-[32px]">
								<img className="w-full h-[300px] rounded-lg mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
							</div>
							<div className="col-md-6 mb-[32px]">
								<img className="w-full h-[300px] rounded-lg mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
							</div>
							<div className="col-md-6 mb-[32px]">
								<img className="w-full h-[300px] rounded-lg mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
							</div>
						</div>
						<div className="row border-b border-solid border-smoke">
							<div className="col-12 pt-[40px]">
								<h3 className="text-center font-semibold text-[30px] lg:text-[24px] text-[#607D8B] leading-[32px] lg:leading-[48px]">Comentarios</h3>
							</div>
							<div className="col-12">
								<p className="text-center text-[16px] text-[#455A64] leading-[24px] mt-[32px] mb-[64px]">Para la planificación de implantes dentales es necesario establecer medidas exactas óseas en relación a estructuras adyacentes. Como es el caso del seno maxilar y conducto dentario inferior. Según los hallazgos Tomográficos se estableció la ausencia de alteraciones óseas en zonas de la planificación de implantes. Siendo lo contrario en el lado contralateral en el cual se evidenció la presencia de alteración ósea compatible con displasia ósea. Las displasias óseas constituye una entidad en la cual el tejido óseo es remplazado por tejido fibroso conteniendo hueso anormal o cemento, ocurre en edades medias. Es frecuente en el sexo femenino, siendo asintomática y con signos de vitalidad en piezas comprometidas. En la mayoría de los casos la lesión se encuentra limitada con presencia de un halo radiolúcido rodeado por una banda de hueso esclerótico.</p>
							</div>
						</div>
						<div className="row justify-center my-[40px]"><div className="col-auto"><button className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full">Siguiente caso</button></div></div>
					</div>
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
}

export default Caso ;