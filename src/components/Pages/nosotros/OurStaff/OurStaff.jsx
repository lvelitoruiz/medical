import React from "react";

//components
import { Link } from "gatsby";

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

import { IMGURL } from "../../../../consts/constants";
import { startLoadingStaff } from "../../../../actions/staff";

const OurStaff = ({handleModal,setDoctorName}) => {

	const dispatch = useDispatch();

	useEffect( () => {
	
		dispatch( startLoadingStaff( ) );

	}, [dispatch]);

	const [ info, setInfo ] = useState([]);

	const {staff} = useSelector( state => state.staff);

	useEffect(() => {
		let info = [];
		staff.map( item => (
			info.push(item.attributes)
		));
		setInfo(info);
	} , [staff]);

	const handleFunctions = (specialist) => {
		handleModal(true);
		setDoctorName(specialist);
	}
	
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
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-12">
									<h2 className="text-center font-semibold text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px] lg:mb-[40px]">Nuestro staff de especialistas</h2>
								</div>
							</div>
							<div className="row justify-center items-center mt-[40px]">
								<div className="col-lg-11">
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
										{
											(info.length) ? info.map( (element,index) => {
												return(
													<SwiperSlide key={index}>
														<div className="">
															<div className="flex flex-col justify-start items-center text-center mb-[40px] lg:mb-0">
																<div className="w-full lg:w-[300px] rounded-[20px]">
																	<img src={`${IMGURL}${element.imagedate.data.attributes.url}`} alt="" />
																</div>
																<p className="text-[18px] lg:text-[24px] font-bold mt-[26px] mb-[10px] leading-[32px]">{element.name}</p>
																<p className="text-gray font-base font-medium mb-8">{element.specialty}</p>
																<span className="border cursor-pointer border-solid border-red text-red hover:bg-red hover:text-white text-[16px] font-semibold py-2 px-6 rounded-full" onClick={() => handleFunctions(element.name)}>
																	<span>Ver más</span>
																</span>
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
				</div>
			</section>
		</React.Fragment>
	);
}

export  { OurStaff };