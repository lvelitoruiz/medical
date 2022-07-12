import React from "react";

//styles 
import './join-us.scss';
//components

import icon1 from "../../../../assets/img/redodontologos@3x.png";

const JoinUs = () => {
	return(
		<React.Fragment>
			<section className="py-[40px] relative lg:py-[90px] bg-[url('../assets/img/BGUnetered@3x.png')] bg-cover bg-left-top">
				<div className="background_img"></div>	
				<div className="gradient_container"></div>
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">
							<div className="row">
								<div className="col-lg-6">
									<div className="flex items-center">
										<div className="w-14 lg:w-24 h-14 lg:h-24 min-w-[3.5rem] lg:min-w-[6rem] bg-[#ffffff] rounded-[14px] lg:rounded-[24px] mr-[30px] flex items-center justify-center">
											<img className="w-10 lg:w-20 h-10 lg:h-20 bg-cover object-cover" src={icon1} alt="" />
										</div>
										<h2 className="font-semibold text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px]">
											Únete a nuestra red de odontólogos
										</h2>	
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-6">
									<div className="lg:mt-[64px] mt-[50px]">
										<form action="" className="form">
											<div className="row">
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Nombre</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Escriba aquí" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Apellidos</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Escriba aquí" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Fecha de nacimiento</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="date" placeholder="Escriba aquí" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">DNI</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="87654321" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Correo electrónico</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="email" placeholder="micorreo@gmail.com" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Celular</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="number" placeholder="945910122" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Dirección</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Jr. Crocane 420" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Especialidad</p>
														<select className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff]">
															<option value="">Seleccionar</option>
															<option value="">Selecciona</option>
															<option value="">Selecciona</option>
														</select>
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Sedes de preferencia</p>
														<select className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff]">
															<option value="">Selecciona la sede</option>
															<option value="">Selecciona</option>
															<option value="">Selecciona</option>
														</select>
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Cop</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="email" placeholder="9895" />
													</div>
												</div>
											</div>
											<div className="row mt-[40px]">
												<div className="col-md-4">
													<button className="text-[#ffffff] rounded-full w-full p-[6px] bg-red font-semibold text-[16px]" type="submit">
														Afiliarme
													</button>
												</div>
											</div>
										</form>
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

export  {JoinUs};