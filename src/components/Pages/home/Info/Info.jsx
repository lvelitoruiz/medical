import React from "react";
//styles
import './info.scss'
//components

import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { IMGURL } from "../../../../consts/constants";


const Info = () => {

	const [ info, setInfo ] = useState([]);

	const {advantages} = useSelector( state => state.advantages);

	useEffect(() => {
		let info = [];
		advantages.map( advantage => (
			info.push(advantage.attributes)
		));
		setInfo(info);
	} , [advantages]);

	return(
		<React.Fragment>
			<section className="py-[40px] lg:py-[90px]">
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">
							<div className="row justify-center">
								<div className="col">
									<h2 className="text-center text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px] mb-[40px] lg:mb-[80px]">Brindamos <span className="font-semibold">confianza y seguridad</span></h2>
								</div>
							</div>
							<div className="row justify-around">

								{
									(info.length) ? 
										info.map( (element,index) => {
											return (
												<div className="col-md-5 col-lg-3" key={index}>
													<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
														<div className="w-40 h-40 bg-smoke rounded-full flex items-center justify-center">
															<img className="h-36 w-36 bg-cover object-cover" src={`${IMGURL}${element.imagedate.data.attributes.url}`} alt="" />
														</div>
														<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
															{element.title}
														</p>
														<span className="text-black leading-[24px]">
															{element.description}
														</span>
													</div>
												</div>
											)
										}) : ''
								}
							</div>	
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export  {Info};