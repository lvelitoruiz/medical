import React from "react";

//components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//utils
import { Link } from "gatsby";

import {
  faPhone
} from '@fortawesome/free-solid-svg-icons'

import {
	faFacebookF,
	faInstagram,
	faTiktok
}	from '@fortawesome/free-brands-svg-icons'

import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
	const [ servicesDigital,setDiagnostics ] = useState([]);
	const [ servicesImages,setServices ] = useState([]);

	const {diagnostics} = useSelector( state => state.diagnostics);
	const {laboratories} = useSelector( state => state.laboratories);

	useEffect(() => {
		let info = [];
		diagnostics.map( diagnostic => (
			info.push(diagnostic.attributes)
		));
		setDiagnostics(info);
	} , [diagnostics]);

	useEffect(() => {
		let info = [];
		laboratories.map( laboratory => (
			info.push(laboratory.attributes)
		));
		setServices(info);
	} , [laboratories]);

	return(
		<React.Fragment>
			<footer className="bg-smoke" id="footer">
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">
							<div className="row pt-[50px] pb-[50px]">

								{/* about us section */}
								<div className="col-md-6 col-lg-3 mb-[40px] lg:mb-0">
									<section className="flex flex-col items-start">	
										<p className="text-[16px] text-gray mb-[18px]"><strong>Nosotros</strong></p>
										<Link className="text-[16px] mb-[16px]" to="/nosotros" state={{ getElement: 0 }}>
											¿Quiénes somos?
										</Link>
										<Link className="text-[16px] mb-[16px]" to="/nosotros" state={{ getElement: 1 }}>
											Staff
										</Link>
										<Link className="text-[16px] mb-[24px]" to="/nosotros" state={{ getElement: 2 }}>
											Nuestras Sedes
										</Link>
										<button className="text-[#ffffff] rounded-full w-48 p-[6px] bg-red font-semibold text-[16px]"><Link to="/#joinUs" state={{ moveToElement: true }}>Afíliate</Link></button>
									</section>
								</div>

								{/* diagnostic imaging section */}
								<div className="col-md-6 col-lg-3 mb-[40px] lg:mb-0">
									<section className="flex flex-col">
										<p className="text-[16px] text-gray mb-[8px]"><strong>Diagnóstico en imagenes</strong></p>
										<p className="text-[14px] text-gray mb-[8px]"><strong>Por especialidad</strong></p>
										{
											(servicesDigital.length) ? 
											servicesDigital.map( (elmt,index) => {
												return(<Link className="text-[16px] mb-[16px]" to="/diagnostico-en-imagenes" key={index} state={{ getElement: index }}>
													{elmt.title}
												</Link>)
											})
											: ""
										}
									</section>
								</div>

								{/* digital lab section */}
								<div className="col-md-6 col-lg-3 mb-[40px] lg:mb-0">
									<section className="flex flex-col">
										<p className="text-[16px] text-gray mb-[18px]"><strong>Laboratorio dental digital</strong></p>
										{
											(servicesImages.length) ? 
											servicesImages.map( (elmt,index) => {
												return(<Link className="text-[16px] mb-[16px]" to="/laboratorio-dental-digital" key={index} state={{ getElement: index }}>
													{elmt.title}
												</Link>)
											})
											: ""
										}

									</section>
								</div>

								{/* clinical cases section */}
								<div className="col-md-6 col-lg-3 mb-[40px] lg:mb-0">
									<section className="flex flex-col">
										<p className="text-[16px] text-gray mb-[18px]"><strong>Casos clínicos</strong></p>
										<Link className="text-[16px] mb-[22px]" to="/casos-clinicos">
											Nuestros casos
										</Link>
									</section>
									<section className="flex flex-col">
										<p className="text-[16px] text-gray mb-[16px]"><strong>Contacto</strong></p>										
										<div>
											<p className="text-[16px] text-red">
												<FontAwesomeIcon className="mr-[10px]" icon={faPhone} />
												(01) 680 2500
											</p>
										</div>
										<div className="flex items-center mt-[24px]">
											<a href="https://www.facebook.com/medicaldentdigital/" target="_blank" className="bg-[#ffffff] rounded-full w-10 h-10 mr-[24px] flex items-center justify-center">
												<FontAwesomeIcon className="text-red" icon={faFacebookF} />
											</a>
											<a href="https://www.instagram.com/medicaldentdigitaloficial/" target="_blank" className="bg-[#ffffff] rounded-full w-10 h-10 mr-[24px] flex items-center justify-center">
												<FontAwesomeIcon className="text-red" icon={faInstagram} />
											</a>
											<a href="https://www.tiktok.com/@medical.dent?_t=8XSbrjU7pYr&_r=1" target="_blank" className="bg-[#ffffff] rounded-full w-10 h-10 mr-[24px] flex items-center justify-center">
												<FontAwesomeIcon className="text-red" icon={faTiktok} />
											</a>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* copyright section */}
				<div className="flex-col md:flex-row border-t border-solid border-gray flex items-center justify-center h-32 md:h-20">
						{/* <img src="" alt="MedicalDent Logo" className="logo"/> */}
						<div className="bg-[url('../assets/img/logo.png')] h-7 w-36 bg-cover mb-[15px] md:mb-0"></div>
						<span className="text-[#A1ACBB] text-[14px] lg:text-[16px] md:ml-[15px]">© 2022 MedicalDent - Powered by Whiz latam</span>
					</div>
			</footer>
		</React.Fragment>
	);
}
export { Footer };