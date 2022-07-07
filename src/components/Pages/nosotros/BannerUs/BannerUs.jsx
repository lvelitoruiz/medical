import React from "react";

//styles 
//components
import banner from "../../../../assets/img/banner-nosotros.jpg";

const BannerUs = () => {
	return(
		<React.Fragment>
			<section className="bg-[#fbfcfe]">
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">
							<div className="row justify-between">
								<div className="col-md-6 col-lg-5">
									<div className="w-full mt-[100px] md:mt-0 md:h-[696px] flex flex-col items-start justify-center">
										<h2 className="text-left text-[30px] lg:text-[56px] md:text-[46px] md:leading-[62px] lg:leading-[72px] font-semibold">
											¿Quienes Somos?
										</h2>
										<p className="leading-6 py-5 text-black-dark font-base font-normal">Medical Dent Digital es una red de centros de apoyo integral odontológico especializado en diagnóstico de imagen odontológica, laboratorio dental con tecnología de flujo digital e insumos dentales. Con lo último en tecnología y la integración de nuestros equipos radiológicos con laboratorio cad cam forman una red interconectada que permite gestionar el diagnóstico y planificación del tratamiento de su paciente.</p>	
									</div>
								</div>
								<div className="col-md-6">
									<div className="md:h-[696px] flex items-center justify-center">
										<img className="h-full object-contain" src={banner} alt="" />
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

export  { BannerUs };

