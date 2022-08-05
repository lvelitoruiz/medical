import React from "react";

//styles 
//components
import banner from "../../../../assets/img/banner-nosotros.jpg";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { IMGURL } from "../../../../consts/constants";

const BannerUs = () => {
	const [ info, setInfo ] = useState([]);

	const {about} = useSelector( state => state.about);

	useEffect(() => {
		let info = [];
		about.map( item => {
			info.push(item.attributes)
		});
		setInfo(info);
	} , [about]);

	return(
		<React.Fragment>
			<section className="bg-[#fbfcfe]">
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">
								{
									(info.length) ? info.slice(-1).map( (element,index) => {
										return(
											<div className="row justify-between" key={index}>
												<div className="col-lg-6">
													<div className="w-full mt-[100px] md:mt-0 md:h-[696px] flex flex-col items-start justify-center">
														<h2 className="text-left text-[30px] lg:text-[56px] md:text-[46px] md:leading-[62px] lg:leading-[72px] font-semibold">
															{element.title}
														</h2>
														<p className="leading-6 py-5 text-black-dark font-base font-normal">{element.text}</p>	
													</div>
												</div>
												<div className="col-md-6">
													<div className="md:h-[696px] flex items-center justify-center">
														<img src={`${IMGURL}${element.imagedate.data.attributes.url}`} alt="" />
													</div>
												</div>
											</div>
										)
									})
										 : ""
								}
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export  { BannerUs };

