import React from "react";

//styles 
//components

const BannerCaso = () => {
	return(
		<React.Fragment>
			<section className="flex items-center justify-center h-96 bg-[url('../assets/img/caso-clinico.png')] bg-cover bg-center">
				<h2 className="text-[#ffffff] text-[36px] md:text-[46px] lg:text-[56px] leading-[48px] font-semibold mt-[50px]">Casos clínicos</h2>
			</section>
		</React.Fragment>
	);
}

export  { BannerCaso };
