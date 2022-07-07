import React from "react";

//components

const OurValues = () => {
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
								<div className="col-md-5 col-lg-3">
									<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
										<div className="w-40 h-40 bg-[#ffffff] rounded-full flex items-center justify-center">
											{/* <img src="" alt="" /> */}
											<div className="bg-[url('../assets/img/1.Equipos@3x.png')] h-36 w-36 bg-cover"></div>
										</div>
										<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
											Respeto
										</p>
										<span className="text-black leading-[24px]">
											Somos respetuosos del entorno que nos rodea e inculcamos el mismo respeto en todos nuestros colaboradores y en nuestra cultura organizacional.
										</span>
									</div>
								</div>

								<div className="col-md-5 col-lg-3">
									<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
										<div className="w-40 h-40 bg-[#ffffff] rounded-full flex items-center justify-center">
											{/* <img src="" alt="" /> */}
											<div className="bg-[url('../assets/img/2.Staff@3x.png')] h-36 w-36 bg-cover"></div>
										</div>
										<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
											Servicio
										</p>
										<span className="text-black leading-[24px]">
											Nuestro equipo humano ha sido reclutado con una sola misión, servir al paciente a través de nuestro trabajo.
										</span>
									</div>
								</div>

								<div className="col-md-5 col-lg-3">
									<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
										<div className="w-40 h-40 bg-[#ffffff] rounded-full flex items-center justify-center">
											{/* <img src="" alt="" /> */}
											<div className="bg-[url('../assets/img/3.Resultados_Online@3x.png')] h-36 w-36 bg-cover"></div>
										</div>
										<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
											Calidad
										</p>
										<span className="text-black leading-[24px]">
											Hemos implementado un sistema de control de calidad que garantiza el cumplimiento de los casos en los tiempos acordados manteniendo nuestros estándares de calidad, confiabilidad y precisión.
										</span>
									</div>
								</div>
							</div>	
							<div className="row justify-around">
								<div className="col-md-5 col-lg-3">
									<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
										<div className="w-40 h-40 bg-[#ffffff] rounded-full flex items-center justify-center">
											{/* <img src="" alt="" /> */}
											<div className="bg-[url('../assets/img/1.Equipos@3x.png')] h-36 w-36 bg-cover"></div>
										</div>
										<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
											Excelencia
										</p>
										<span className="text-black leading-[24px]">
											Buscamos superarnos día a día, es por eso que estamos renovándonos con lo último en tecnología y en constante capacitación de buenas prácticas dentales para siempre ofrecer lo mejor a nuestros clientes.
										</span>
									</div>
								</div>

								<div className="col-md-5 col-lg-3">
									<div className="flex flex-col text-center items-center justify-start mb-[40px] lg:mb-0">
										<div className="w-40 h-40 bg-[#ffffff] rounded-full flex items-center justify-center">
											{/* <img src="" alt="" /> */}
											<div className="bg-[url('../assets/img/2.Staff@3x.png')] h-36 w-36 bg-cover"></div>
										</div>
										<p className="text-red lg:text-[24px] text-[18px] font-semibold my-[20px]">
											Compromiso
										</p>
										<span className="text-black leading-[24px]">
											Sabemos que nuestro trabajo es pieza importante en la cadena de valor de la salud odontológica, por eso, dedicamos nuestro mayor esfuerzo y conocimiento en cada caso realizado.
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

export  { OurValues };