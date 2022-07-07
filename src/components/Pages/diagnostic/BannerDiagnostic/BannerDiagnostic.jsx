import React from "react";

//styles 
//components

const BannerDiagnostic = () => {
	return(
		<React.Fragment>
			<section className="flex items-center justify-center h-96 bg-[url('../assets/img/Diagnostico_en_imagenes@3x.png')] bg-cover bg-center">
				<h2 className="text-[#ffffff] text-center text-[36px] md:text-[46px] lg:text-[56px] leading-[48px] font-semibold mt-[50px]">Diagnóstico en imágenes</h2>
			</section>
		</React.Fragment>
	);
}

export  { BannerDiagnostic };

