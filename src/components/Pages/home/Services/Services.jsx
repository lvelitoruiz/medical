import React from "react";
//styles
import './services.scss';
//components
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from "react-redux";
import { useState } from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
	faTooth,
	faFlask,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";
import { IMGURL } from "../../../../consts/constants";

const Services = () => {

	const [ isServices,setIsServices ] = useState(true);
	const [ servicesImages,setServices ] = useState([]);
	const [ servicesDigital,setDiagnostics ] = useState([]);

	const {laboratories} = useSelector( state => state.laboratories);
	const {diagnostics} = useSelector( state => state.diagnostics);

	useEffect(() => {
		let info = [];
		laboratories.map( laboratory => (
			info.push(laboratory.attributes)
		));
		setServices(info);
	} , [laboratories]);

	useEffect(() => {
		let info = [];
		diagnostics.map( diagnostic => (
			info.push(diagnostic.attributes)
		));
		setDiagnostics(info);
	} , [diagnostics]);

	const changeService = () => {
		setIsServices(!isServices);
	}

	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
		  return '<span class="w-3 h-3 mx-[6px] bg-black rounded-full cursor-pointer ' + className + '"></span>'
		},
	};

	return(
		<React.Fragment>
			<section className="py-[40px] lg:py-[90px] bg-smoke">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-12">
									<h2 className="text-center font-semibold text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px] mb-[40px]">Nuestros servicios</h2>
								</div>
							</div>
							<div className="row items-center justify-center mb-[48px]">
								<div className="col-md-6 col-lg-5">
									<div className="bg-white flex p-[8px] rounded-[40px] md:rounded-full flex-col md:flex-row">
										<div onClick={changeService} className={`px-[30px] duration-300 ${isServices ? 'bg-red text-[#ffffff] ' : '' } hover:bg-red hover:text-[#ffffff] py-[10px] rounded-full w-full flex items-center justify-center cursor-pointer`}>
											<FontAwesomeIcon className="text-[30px] mr-[20px]" icon={faTooth} />
											<p>Diagnóstico<br />en imágenes</p>
										</div>
										<div onClick={changeService} className={`px-[30px] duration-300 ${!isServices ? 'bg-red text-[#ffffff] ' : '' } hover:bg-red hover:text-[#ffffff] py-[10px] rounded-full w-full flex items-center justify-center cursor-pointer`}>
											<FontAwesomeIcon className="text-[30px] mr-[20px]" icon={faFlask} />
											<p>Laboratorio<br />Dental Digital</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row justify-center items-center">
								<div className="col-lg-11">
									<div className="row items-center justify-center mb-[70px]">
										<p className="text-[#607D8B] text-[24px]">Laboratorio Dental implementado con Flujo Digital CAD CAM:</p>
									</div>
									<div className="row justify-around grid-cols-12">
										<Swiper
											modules={[Pagination]}
											pagination={pagination}
											breakpoints={{
												640: {
													slidesPerView: 1,
													spaceBetween: 0,
												},
												768: {
													slidesPerView: 2,
													spaceBetween: 0,
												},
												1024: {
													slidesPerView: 3,
													spaceBetween: 0,
												},
											}}
											spaceBetween={0}
											slidesPerView={3}
											onSlideChange={() => console.log('slide change')}
											onSwiper={(swiper) => console.log(swiper)}
										>
										{
											(isServices) ? 
											servicesDigital.map( (elmt,index) => {
												return(
													<SwiperSlide key={index} className="col-12 col-md-6 col-lg-4">
															<div className="flex flex-col justify-start items-center text-center mb-[40px] lg:mb-0">
																<div className="w-full lg:w-[300px] lg:h-[300px] rounded-[20px]">
																	<img src={`${IMGURL}${elmt.imagedate.data.attributes.url}`} alt="" />
																</div>
																<p className="text-[18px] lg:text-[24px] font-bold mt-[16px] mb-[32px] leading-[32px]">{elmt.title}</p>
																<Link to="/diagnostico-en-imagenes" state={{ getElement: index }} className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-[35px] rounded-full">
																	<span>{elmt.button}</span>
																</Link>
															</div>
													</SwiperSlide>
												)
											}) : servicesImages.map( (elmt,index) => {
												return(
													<SwiperSlide key={index} className="col-12 col-md-6 col-lg-4">
														<div className="flex flex-col justify-start items-center text-center mb-[40px] lg:mb-0">
															<div className="w-full lg:w-[300px] lg:h-[300px] rounded-[20px]">
																<img src={`${IMGURL}${elmt.imagedate.data.attributes.url}`} alt="" />
															</div>
															<p className="text-[18px] lg:text-[24px] font-bold mt-[16px] mb-[32px] leading-[32px]">{elmt.title}</p>
															<Link to="/laboratorio-dental-digital" state={{ getElement: index }} className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-[35px] rounded-full">
																<span>{elmt.button}</span>
															</Link>
														</div>
													</SwiperSlide>
												)
											})
										}
										</Swiper>
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