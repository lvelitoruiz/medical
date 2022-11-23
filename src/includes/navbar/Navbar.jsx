import React from "react";
import { Link } from "gatsby";

//components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//styles 
import './navbar.scss';

import {
  faAngleRight,
	faAngleDown,
	faBars,
} from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

import { useDispatch } from 'react-redux';
import { startLoadingDiagnostics } from "../../actions/diagnostics";
import { startLoadingLaboratories } from "../../actions/laboratories";


const Navbar = ( { diagnosticsMenu = false, laboratoriesMenu = false} ) => {

	const dispatch = useDispatch();

	useEffect( () => {
	
		dispatch( startLoadingLaboratories( ) );
		dispatch( startLoadingDiagnostics( ) );

	}, [dispatch]);

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
			<header className="bg-smoke fixed flex items-center w-full h-20 z-10">
				<div className="w-full mx-[15px]">
					<div className="row">
						<div className="col">
							<div className="flex items-center justify-between">
								<div>
									<Link to="/">
										{/* <img src="" alt="MedicalDent Logo" className="logo"/> */}
										<div className="bg-[url('../assets/img/logo.png')] h-10 w-52 bg-cover"></div>
									</Link>
								</div>
								<nav>
									<div className="lg:hidden">
										<FontAwesomeIcon className="ml-[10px] text-[20px] text-red" icon={faBars} />
									</div>
									{/* add class active */}
									<ul className="g-nav shadow-xl lg:shadow-none">
										<li className="font-semibold px-[15px] lg:px-[10px] py-[10px] lg:py-0">
											<Link to="/nosotros">Nosotros</Link>
										</li>
										<li className="font-semibold px-[15px] lg:px-[10px] py-[10px] lg:py-0 relative sub-container">
											<Link className="flex justify-between items-center" to=""> 
												<span>Diagnóstico en imagenes</span>
												<FontAwesomeIcon className="ml-[10px] text-red" icon={faAngleDown} />
											</Link>
											{/* add class active */}
											<ul className="g-nav--sub lg:shadow-xl">
												<li className="text-red mb-[10px]">
													Por especialidad
												</li>

												{
													(servicesDigital.length) ? 
													servicesDigital.map( (elmt,index) => {
														return(<li className="mb-[10px] font-medium hover:font-bold" key={index}>
															<Link 
																to="/diagnostico-en-imagenes"
																state={{ getElement: index }}
															>{elmt.title}</Link>
														</li>)
													})
													: ""
												}
											</ul>
										</li>
										<li className="font-semibold px-[15px] lg:px-[10px] py-[10px] lg:py-0 relative sub-container">
											<Link to="" className="flex justify-between items-center">
												<span>Laboratorio Dental Digital</span>
												<FontAwesomeIcon className="ml-[10px] text-red" icon={faAngleDown} />
											</Link>
											{/* add class active */}
											<ul className="g-nav--sub lg:shadow-xl">
												{
													(servicesImages.length) ? 
													servicesImages.map( (elmt,index) => {
														return(<li className="mb-[10px] font-medium hover:font-bold" key={index}>
															<Link
																to="/laboratorio-dental-digital"
																state={{ getElement: index }}>{elmt.title}</Link>
														</li>)
													})
													: ""
												}
											</ul>
										</li>
										<li className="font-semibold px-[15px] lg:px-[10px] py-[10px] lg:py-0">
											<Link to="/casos-clinicos">Casos Clínicos</Link>
										</li>
										<li className="font-semibold px-[15px] lg:px-[10px] py-[10px] lg:py-0">
											<Link to="/contacto">Contacto</Link>
										</li>
										<li className="font-semibold px-[15px] lg:px-[10px] py-[10px] lg:py-0">
											<a href="#" target="_blank" className="text-[#ffffff] inline-block rounded-full py-[6px] px-[24px] bg-red font-semibold text-[16px]">
												<span>Resultados en Línea</span>
												<FontAwesomeIcon className="ml-[10px]" icon={faAngleRight} />
											</a>
										</li>
										<li className="font-semibold px-[15px] lg:pr-0 lg:pl-[10px] py-[10px] lg:py-0 whitespace-nowrap">
											<a href="https://intranet.medicaldentdigital.pe/" target="_blank" className="text-[#ffffff] inline-block rounded-full py-[6px] px-[24px] bg-red font-semibold text-[16px]">
												<span>Intranet</span>
												<FontAwesomeIcon className="ml-[10px]" icon={faAngleRight} />
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}
export { Navbar };	