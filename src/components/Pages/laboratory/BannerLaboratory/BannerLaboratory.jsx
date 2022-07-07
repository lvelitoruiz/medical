import React from "react";

//styles 
//components

const BannerLaboratory = () => {
	return(
		<React.Fragment>
			<section className="flex items-center justify-center h-96 bg-[url('../assets/img/Lab_dental.png')] bg-cover bg-center">
				<h2 className="text-[#ffffff] text-center text-[36px] md:text-[46px] lg:text-[56px] leading-[48px] font-semibold mt-[50px]">Laboratorio Dental Digital</h2>
			</section>
		</React.Fragment>
	);
}

export  { BannerLaboratory };

