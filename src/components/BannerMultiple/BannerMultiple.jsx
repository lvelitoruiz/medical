import React from "react";
import { IMGURL } from "../../consts/constants";

const BannerMultiple = ( {bg,text} ) => {

    const background = "url('"+IMGURL+""+bg+"')";
	return(
		<React.Fragment>
			<section className={"flex items-center justify-center h-96 bg-cover bg-center"} style={ {"backgroundImage": background}} >
				<h2 className="text-[#ffffff] text-center text-[36px] md:text-[46px] lg:text-[56px] leading-[48px] font-semibold mt-[50px]">{text}</h2>
			</section>
		</React.Fragment>
	);
}

export  { BannerMultiple };