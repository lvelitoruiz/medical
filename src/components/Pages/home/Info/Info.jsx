import React from "react";
//styles
import './info.scss'
//components

import icon1 from "../../../../assets/img/1.Equipos@3x.png";
import icon2 from "../../../../assets/img/2.Staff@3x.png";
import icon3 from "../../../../assets/img/3.Resultados_Online@3x.png";

const Info = () => {
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
								<div className="col-md-5 col-lg-3">
									<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
										<div className="w-40 h-40 bg-smoke rounded-full flex items-center justify-center">
											<img className="h-36 w-36 bg-cover object-cover" src={icon1} alt="" />
										</div>
										<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
											Equipamiento digital<br/>de vanguardia
										</p>
										<span className="text-black leading-[24px]">
											Todo nuestro equipamiento dental es digital para así brindar la mejor calidad de imagen y más importante ofrecer un software gratuito en donde se podrá usar una variedad de herramientas de edición para un estudio más profundo en su consultorio.
										</span>
									</div>
								</div>

								<div className="col-md-5 col-lg-3">
									<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
										<div className="w-40 h-40 bg-smoke rounded-full flex items-center justify-center">
											<img className="h-36 w-36 bg-cover object-cover" src={icon2} alt="" />
										</div>
										<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
											Staff con amplia experiencia
										</p>
										<span className="text-black leading-[24px]">
											Nuestro grupo humano de colaboradores cuenta con años de experiencia en el sector y están en constante formación para brindar una atención de calidad y diagnóstico preciso.
										</span>
									</div>
								</div>

								<div className="col-md-5 col-lg-3">
									<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
										<div className="w-40 h-40 bg-smoke rounded-full flex items-center justify-center">
											<img className="h-36 w-36 bg-cover object-cover" src={icon3} alt="" />
										</div>
										<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
											Plataforma<br/>en la Nube
										</p>
										<span className="text-black leading-[24px]">
											Cree órdenes digitales, consulte los resultados de sus pacientes en tiempo real y descárguelos las veces que quiera dentro de nuestra nube. Cree su cuenta con nosotros y disfrute de todos los beneficios que nuestra plataforma digital tiene para usted.
										</span>
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

export  {Info};