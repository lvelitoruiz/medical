import React from "react";

import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { IMGURL } from "../../../../consts/constants";
import { startLoadingValues } from "../../../../actions/values";

//components

const OurValues = () => {

	const dispatch = useDispatch();

	useEffect( () => {
	
		dispatch( startLoadingValues( ) );

	}, [dispatch]);

	const [ info, setInfo ] = useState([]);

	const {values} = useSelector( state => state.values);

	useEffect(() => {
		let info = [];
		values.map( value => (
			info.push(value.attributes)
		));
		setInfo(info);
	} , [values]);


	return(
		<React.Fragment>
			<section id="home_info" className="py-[40px] lg:py-[90px] bg-smoke">
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">
							<div className="row justify-center">
								<div className="col">
									<h2 className="text-center text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px] mb-[40px] lg:mb-[80px] font-semibold">Nuestros Valores</h2>
								</div>
							</div>
							<div className="row justify-around lg:mb-20">
								{
									(info.length) ? info.slice(0,3).map( (element,index) => {
										return(
											<div className="col-md-5 col-lg-3" key={index}>
												<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
													<div className="w-40 h-40 bg-[#ffffff] rounded-full flex items-center justify-center">
														<img src={`${IMGURL}${element.imagedate.data.attributes.url}`} alt="" />
													</div>
													<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
														{element.title}
													</p>
													<span className="text-black leading-[24px]">
														{element.text}
													</span>
												</div>
											</div>
										)
									}) : ""
								}
							</div>	
							<div className="row justify-around">
								{
									(info.length) ? info.slice(-2).map( (element,index) => {
										return(
											<div className="col-md-5 col-lg-3" key={index}>
												<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
													<div className="w-40 h-40 bg-[#ffffff] rounded-full flex items-center justify-center">
														<img src={`${IMGURL}${element.imagedate.data.attributes.url}`} alt="" />
													</div>
													<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
														{element.title}
													</p>
													<span className="text-black leading-[24px]">
														{element.text}
													</span>
												</div>
											</div>
										)
									}) : ""
								}
							</div>
						</div>
					</div>
				</div>
			</section>
			
		</React.Fragment>
	);
}

export  { OurValues };