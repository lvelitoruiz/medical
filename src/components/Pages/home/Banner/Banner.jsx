import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IMGURL } from "../../../../consts/constants";

//styles 
import './banner.scss';
//components

const Banner = ({bg,text}) => {
	const [bgImage,setBgImage] = useState("");
	useEffect( () => {
		if(bg) {
			setBgImage(bg);
		}
	}, [bg])

	return(
		<React.Fragment>
			<section className={"pt-[88px] bg-smoke pb-[44px] w-full h-[685px] lg:h-[785px] relative"}>
				{
					(bgImage !== "") ? <img src={`${IMGURL}${bgImage}`} className="absolute right-0 top-0 object-cover w-full h-full" alt="" /> : ""
				}
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">
							<div className="row">
								<div className="col-lg-7 col-md-8">
									<div className="flex justify-center h-[600px] lg:h-[696px] lg:items-center">
										<h2 className="pt-[40px] lg:pt-0 lg:pb-[100px] text-left text-[30px] lg:text-[56px] md:text-[46px] md:leading-[62px] lg:leading-[72px] font-semibold">
											<span className="emphasis">
											{text}
											</span>
										</h2>	
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

export  {Banner};