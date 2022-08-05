import React from "react";
//styles
import './testimonial.scss'
//components
import icon1 from "../../../../assets/img/start.png";
import testimonio from "../../../../assets/img/testimonio.png";

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IMGURL } from "../../../../consts/constants";

const Testimonial = () => {

	const [ clients, setClients ] = useState([]);

	const {testimonials} = useSelector( state => state.testimonials);

	useEffect(() => {
		let info = [];
		testimonials.map( testimonial => {
			info.push(testimonial.attributes)
		});
		setClients(info);
	} , [testimonials]);


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
									
									{
										(clients.length) ? 
											clients.map( (client,index) => {
												return (
													<SwiperSlide key={index}>
														<div className="md:flex items-center">
															<div className="md:w-[50%] md:h-[420px]">
																<img className="bg-cover w-full rounded-[24px] h-full object-cover" src={`${IMGURL}${client.imagedate.data.attributes.url}`} alt="" />
															</div>
															<div className="md:w-[50%] items-start bg-[#ffffff] rounded-[24px] flex flex-col justify-between md:px-[60px] my-[20px] lg:my-0">
																<div>
																	<img className="mb-3 h-12 w-12 bg-cover object-cover" src={require(`../../../../assets/img/${client.icon}`).default} alt="" />
																	<h3 className="text-red text-[20px] font-semibold mb-[8px]">{client.title}</h3>
																	<span className="bg-smoke text-[12px] py-[6px] px-[10px] font-semibold rounded-[40px]">{client.subtitle}</span>
																	<p className="leading-[24px] mt-[15px]">{client.description}</p>
																</div>
																<div className="mt-[30px]">
																	<p className="font-semibold">{client.leader}</p>
																	<p className="leading-[24px]">{client.detail}</p>
																</div>
															</div>
														</div>
													</SwiperSlide>
												)
											}) : ""
									}
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