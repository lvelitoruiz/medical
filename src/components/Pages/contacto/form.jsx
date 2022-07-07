import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby";

import {
  faPhone,
	faFile
} from '@fortawesome/free-solid-svg-icons'

import {
	faFacebookF,
	faInstagram,
	faLinkedinIn
}	from '@fortawesome/free-brands-svg-icons'

const Form = () => {
    return (
      <React.Fragment>
        <section className="container">
					<div className="row justify-center pt-[140px] md:pt-[160px] mb-[10px] items-center">
						<div className="col-lg-11">
							<div className="row justify-between">
								<div className="col-12 col-md-5 col-lg-4 mb-[15px] md:mb-0">
									<h1 className="font-semibold text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px] mb-[24px]">Contáctanos</h1>
									<p className="mb-[24px]">Ponte en contacto con nosotros y uno de nuestros asesores te atenderá a la brevedad.</p>
									<div className="mb-[24px]">
										<p className="text-gray mb-[10px]">Sede central</p>
										<div className="flex items-center text-red">
											<FontAwesomeIcon className="mr-[10px]" icon={faPhone} />
											<a href="">(01) 680 2500</a>
										</div>
									</div>
									<div className="mb-[24px]">
										<p className="text-gray mb-[10px]">Síguenos</p>
										<div className="flex items-center mt-[24px]">
											<Link className="mr-[40px] flex items-center justify-center" to="">
												<FontAwesomeIcon className="text-red" icon={faFacebookF} />
											</Link>
											<Link className="mr-[40px] flex items-center justify-center" to="">
												<FontAwesomeIcon className="text-red" icon={faInstagram} />
											</Link>
											<Link className="mr-[40px] flex items-center justify-center" to="">
												<FontAwesomeIcon className="text-red" icon={faLinkedinIn} />
											</Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-7 col-lg-6 mb-[15px] md:mb-0">
									<div className="bg-smoke p-[20px] md:px-[32px] md:py-[44px] rounded-3xl">
										<form action="">
											<div className="row">
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Nombres</p>
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
														<p className="font-normal pb-[8px] pl-[16px]">Celular / Teléfono</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="+51" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">E-mail</p>
														<input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="email" placeholder="nombre@mail.com" />
													</div>
												</div>
												<div className="col-md-12">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Asunto</p>
														<select className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff]">
															<option value="">Selecciona</option>
															<option value="">Selecciona</option>
															<option value="">Selecciona</option>
														</select>
													</div>
												</div>
												<div className="col-md-12">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Adjuntar archivos</p>
														<div>
															<input className="hidden" id="file-upload" type="file" name="fileUpload" />
															<label className="cursor-pointer flex items-center justify-center rounded-xl border border-gray border-dashed p-[20px] text-center" for="file-upload" id="file-drag">
																<FontAwesomeIcon className="text-gray mr-[10px]" icon={faFile} />
																<p className="text-left text-gray font-normal">Arrasta el archivo aquí o click para adjuntar</p>
															</label>
														</div>
													</div>
												</div>
												<div className="col-md-12">
													<div className="mb-[20px]">
														<p className="font-normal pb-[8px] pl-[16px]">Comentarios o Preguntas</p>
														<textarea className="py-[8px] px-[16px] rounded-2xl w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" placeholder="Escriba aquí…." name="" id="" cols="10" rows="5"></textarea>
													</div>
												</div>
											</div>
											<div className="row justify-center">
												<div className="col-auto">
												<button className="text-[#ffffff] rounded-full w-40 p-[6px] bg-red font-semibold text-[16px]">Enviar</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
		</section>
      </React.Fragment>
    )
  }

export { Form }