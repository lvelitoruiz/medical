import React from "react";
//styles
import './services.scss';
//components
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import laboratory from "../../../../assets/img/laboratoryservice@3x.png";
import laboratory3 from "../../../../assets/img/sistemaflujo@3x.png";

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
	faAngleRight,
	faTooth,
	faFlask,
	faWrench,
} from '@fortawesome/free-solid-svg-icons'

const Services = () => {

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
							<div className="row items-center justify-center mb-[80px]">
								<div className="col-lg-6">
									<div className="bg-white flex p-[8px] rounded-[40px] md:rounded-full flex-col md:flex-row">
										<div className="px-[30px] duration-300 hover:bg-red hover:text-[#ffffff] py-[10px] rounded-full w-full flex items-center justify-center cursor-pointer">
											<FontAwesomeIcon className="text-[30px] mr-[20px]" icon={faTooth} />
											<p>Diagnóstico<br />en imágenes</p>
										</div>
										<div className="px-[30px] duration-300 bg-red text-[#ffffff] py-[10px] rounded-full w-full flex items-center justify-center cursor-pointer">
											<FontAwesomeIcon className="text-[30px] mr-[20px]" icon={faFlask} />
											<p>Laboratorio<br />Dental Digital</p>
										</div>
										<div className="px-[30px] duration-300 hover:bg-red hover:text-[#ffffff] py-[10px] rounded-full w-full flex items-center justify-center cursor-pointer">
											<FontAwesomeIcon className="text-[30px] mr-[20px]" icon={faWrench} />
											<p>Insumos<br />Dentales</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row justify-center items-center">
								<div className="col-lg-11">
									<div className="row">
										<Swiper
											modules={[Navigation, Pagination]}
											navigation
											pagination={pagination}
											breakpoints={{
												640: {
													slidesPerView: 2,
													spaceBetween: 20,
												},
												768: {
													slidesPerView: 2,
													spaceBetween: 40,
												},
												1024: {
													slidesPerView: 3,
													spaceBetween: 50,
												},
											}}
											spaceBetween={10}
											slidesPerView={1}
											onSlideChange={() => console.log('slide change')}
											onSwiper={(swiper) => console.log(swiper)}
										>
											<SwiperSlide>
												<div className="">
													<div className="flex flex-col justify-start items-center text-center mb-[40px] lg:mb-0">
														<div className="w-full lg:w-[300px] lg:h-[300px] rounded-[20px]">
															<img src={laboratory} alt="" />
														</div>
														<p className="text-[18px] lg:text-[24px] font-bold my-[26px] leading-[32px]">Servicio para <br /> consultorio</p>
														<Link to="" className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full">
															<span>Ver más</span>
															<FontAwesomeIcon className="text-red ml-[10px]" icon={faAngleRight} />
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="">
													<div className="flex flex-col justify-start items-center text-center mb-[40px] lg:mb-0">
														<div className="w-full lg:w-[300px] lg:h-[300px] rounded-[20px]">
															<img src={laboratory} alt="" />
														</div>
														<p className="text-[18px] lg:text-[24px] font-bold my-[26px] leading-[32px]">Servicio para <br /> consultorio</p>
														<Link to="" className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full">
															<span>Ver más</span>
															<FontAwesomeIcon className="text-red ml-[10px]" icon={faAngleRight} />
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="">
													<div className="flex flex-col justify-start items-center text-center mb-[40px] lg:mb-0">
														<div className="w-full lg:w-[300px] lg:h-[300px] rounded-[20px]">
															<img src={laboratory3} alt="" />
														</div>
														<p className="text-[18px] lg:text-[24px] font-bold my-[26px] leading-[32px]">Servicio para <br /> consultorio</p>
														<Link to="" className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full">
															<span>Ver más</span>
															<FontAwesomeIcon className="text-red ml-[10px]" icon={faAngleRight} />
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="">
													<div className="flex flex-col justify-start items-center text-center mb-[40px] lg:mb-0">
														<div className="w-full lg:w-[300px] lg:h-[300px] rounded-[20px]">
															<img src={laboratory3} alt="" />
														</div>
														<p className="text-[18px] lg:text-[24px] font-bold my-[26px] leading-[32px]">Servicio para <br /> consultorio</p>
														<Link to="" className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full">
															<span>Ver más</span>
															<FontAwesomeIcon className="text-red ml-[10px]" icon={faAngleRight} />
														</Link>
													</div>
												</div>
											</SwiperSlide>
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