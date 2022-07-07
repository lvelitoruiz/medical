import React from "react";
//styles
import './testimonial.scss'
//components
import icon1 from "../../../../assets/img/start.png";
import testimonio from "../../../../assets/img/testimonio.png";

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {

	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
		  return '<span class="w-3 h-3 mx-[6px] bg-black rounded-full cursor-pointer ' + className + '"></span>'
		},
	};


	return(
		<React.Fragment>
			<section className="py-[40px] lg:py-[90px]">
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">
							<h2 className="text-center font-semibold text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px] mt-[10px]">Testimonio de nuestros clientes</h2>
							<div className="row justify-center mt-[30px] md:mt-[70px]">
								<Swiper
											modules={[Pagination]}
											pagination={pagination}
											breakpoints={{
												640: {
													slidesPerView: 1,
													spaceBetween: 20,
												},
												768: {
													slidesPerView: 1,
													spaceBetween: 40,
												},
												1024: {
													slidesPerView: 1,
													spaceBetween: 50,
												},
											}}
											spaceBetween={10}
											slidesPerView={1}
											onSlideChange={() => console.log('slide change')}
											onSwiper={(swiper) => console.log(swiper)}
										>
									<SwiperSlide>		
										<div className="md:flex items-center">
											<div className="md:w-[50%] md:h-[420px]">
												<img className="bg-cover w-full rounded-[24px] h-full object-cover" src={testimonio} alt="" />
											</div>
											<div className="md:w-[50%] items-start bg-[#ffffff] rounded-[24px] flex flex-col justify-between md:px-[60px] my-[20px] lg:mb-0">
												<div>
													<img className="mb-3 h-12 w-12 bg-cover object-cover" src={icon1} alt="" />
													<h3 className="text-red text-[20px] font-semibold mb-[8px]">Clínica Dental Vértiz</h3>
													<span className="bg-smoke text-[12px] py-[6px] px-[10px] font-semibold rounded-[40px]">Diagnóstico por imágenes</span>
													<p className="leading-[24px] mt-[15px]">“En Medical Dent encontramos, un buen aliado para poder complementar los Diagnósticos de los pacientes, estoy muy contenta con el servicio y con la atención que nos brindan”.</p>
												</div>
												<div className="mt-[30px]">
													<p className="font-semibold">Dra. Ana Trujillo Vértiz</p>
													<p className="leading-[24px]">C.O.P: 26570 - R.N.E 2435</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>		
										<div className="md:flex items-center">
											<div className="md:w-[50%] md:h-[420px]">
												<img className="bg-cover w-full rounded-[24px] h-full object-cover" src={testimonio} alt="" />
											</div>
											<div className="md:w-[50%] items-start bg-[#ffffff] rounded-[24px] flex flex-col justify-between md:px-[60px] my-[20px] lg:mb-0">
												<div>
													<img className="mb-3 h-12 w-12 bg-cover object-cover" src={icon1} alt="" />
													<h3 className="text-red text-[20px] font-semibold mb-[8px]">Clínica Dental Vértiz</h3>
													<span className="bg-smoke text-[12px] py-[6px] px-[10px] font-semibold rounded-[40px]">Diagnóstico por imágenes</span>
													<p className="leading-[24px] mt-[15px]">“En Medical Dent encontramos, un buen aliado para poder complementar los Diagnósticos de los pacientes, estoy muy contenta con el servicio y con la atención que nos brindan”.</p>
												</div>
												<div className="mt-[30px]">
													<p className="font-semibold">Dra. Ana Trujillo Vértiz</p>
													<p className="leading-[24px]">C.O.P: 26570 - R.N.E 2435</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>		
										<div className="md:flex items-center">
											<div className="md:w-[50%] md:h-[420px]">
												<img className="bg-cover w-full rounded-[24px] h-full object-cover" src={testimonio} alt="" />
											</div>
											<div className="md:w-[50%] items-start bg-[#ffffff] rounded-[24px] flex flex-col justify-between md:px-[60px] my-[20px] lg:mb-0">
												<div>
													<img className="mb-3 h-12 w-12 bg-cover object-cover" src={icon1} alt="" />
													<h3 className="text-red text-[20px] font-semibold mb-[8px]">Clínica Dental Vértiz</h3>
													<span className="bg-smoke text-[12px] py-[6px] px-[10px] font-semibold rounded-[40px]">Diagnóstico por imágenes</span>
													<p className="leading-[24px] mt-[15px]">“En Medical Dent encontramos, un buen aliado para poder complementar los Diagnósticos de los pacientes, estoy muy contenta con el servicio y con la atención que nos brindan”.</p>
												</div>
												<div className="mt-[30px]">
													<p className="font-semibold">Dra. Ana Trujillo Vértiz</p>
													<p className="leading-[24px]">C.O.P: 26570 - R.N.E 2435</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>		
										<div className="md:flex items-center">
											<div className="md:w-[50%] md:h-[420px]">
												<img className="bg-cover w-full rounded-[24px] h-full object-cover" src={testimonio} alt="" />
											</div>
											<div className="md:w-[50%] items-start bg-[#ffffff] rounded-[24px] flex flex-col justify-between md:px-[60px] my-[20px] lg:mb-0">
												<div>
													<img className="mb-3 h-12 w-12 bg-cover object-cover" src={icon1} alt="" />
													<h3 className="text-red text-[20px] font-semibold mb-[8px]">Clínica Dental Vértiz</h3>
													<span className="bg-smoke text-[12px] py-[6px] px-[10px] font-semibold rounded-[40px]">Diagnóstico por imágenes</span>
													<p className="leading-[24px] mt-[15px]">“En Medical Dent encontramos, un buen aliado para poder complementar los Diagnósticos de los pacientes, estoy muy contenta con el servicio y con la atención que nos brindan”.</p>
												</div>
												<div className="mt-[30px]">
													<p className="font-semibold">Dra. Ana Trujillo Vértiz</p>
													<p className="leading-[24px]">C.O.P: 26570 - R.N.E 2435</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>		
										<div className="md:flex items-center">
											<div className="md:w-[50%] md:h-[420px]">
												<img className="bg-cover w-full rounded-[24px] h-full object-cover" src={testimonio} alt="" />
											</div>
											<div className="md:w-[50%] items-start bg-[#ffffff] rounded-[24px] flex flex-col justify-between md:px-[60px] my-[20px] lg:mb-0">
												<div>
													<img className="mb-3 h-12 w-12 bg-cover object-cover" src={icon1} alt="" />
													<h3 className="text-red text-[20px] font-semibold mb-[8px]">Clínica Dental Vértiz</h3>
													<span className="bg-smoke text-[12px] py-[6px] px-[10px] font-semibold rounded-[40px]">Diagnóstico por imágenes</span>
													<p className="leading-[24px] mt-[15px]">“En Medical Dent encontramos, un buen aliado para poder complementar los Diagnósticos de los pacientes, estoy muy contenta con el servicio y con la atención que nos brindan”.</p>
												</div>
												<div className="mt-[30px]">
													<p className="font-semibold">Dra. Ana Trujillo Vértiz</p>
													<p className="leading-[24px]">C.O.P: 26570 - R.N.E 2435</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									{/* <SwiperSlide>
										<div className="">
											<div className="card items-start bg-[#ffffff] rounded-[24px] flex flex-col justify-between min-h-[370px] p-[32px] mb-[40px] lg:mb-0">
												<div>
													<h3 className="text-red text-[20px] font-semibold mb-[8px]">Consultorio Privado</h3>
													<span className="bg-smoke text-[12px] py-[6px] px-[10px] font-semibold rounded-[40px]">Diagnóstico por imágenes</span>
													<p className="leading-[24px] mt-[15px]">“Si tenemos buena imagen tenemos buen resultado. Eso es MedicalDent Callao”.</p>
												</div>
												<div>
													<p className="font-semibold">Dra. Ana Trujillo Vértiz</p>
													<p className="leading-[24px]">C.O.P: 26570 - R.N.E 2435</p>
												</div>
											</div>
										</div>
									</SwiperSlide> */}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export  {Testimonial};