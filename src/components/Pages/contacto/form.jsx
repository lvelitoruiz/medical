import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby";
import { Formik } from 'formik';
import { useState } from "react";

import {
  faPhone,
	faFile
} from '@fortawesome/free-solid-svg-icons'

import {
	faFacebookF,
	faInstagram,
	faTiktok
}	from '@fortawesome/free-brands-svg-icons'

import axios from 'axios';

const Form = () => {

	const [mailSent,setMailSent] = useState(false);

	const sendMail = async (values) => {

		console.log(values);

		const data = { data: values };
		console.log(data);
		const APIURL = process.env.GATSBY_API_URL;

		var config = {
			method: 'post',
			url: `${APIURL}contact-forms`,
			headers: { 
			  'Content-Type': 'application/json'
			},
			data : data
		  };

		await axios(config).then(response => {
				console.log('mail enviado correctamente');
				setMailSent(true);
		});

	} 

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
											<span>(01) 680 2500</span>
										</div>
									</div>
									<div className="mb-[24px]">
										<p className="text-gray mb-[10px]">Síguenos</p>
										<div className="flex items-center mt-[24px]">
											<a href="https://www.facebook.com/medicaldentdigital/" target="_blank" className="bg-[#ffffff] rounded-full w-10 h-10 mr-[24px] flex items-center justify-center">
												<FontAwesomeIcon className="text-red" icon={faFacebookF} />
											</a>
											<a href="https://www.instagram.com/medicaldentdigitaloficial/" target="_blank" className="bg-[#ffffff] rounded-full w-10 h-10 mr-[24px] flex items-center justify-center">
												<FontAwesomeIcon className="text-red" icon={faInstagram} />
											</a>
											<a href="https://www.tiktok.com/@medical_dent" target="_blank" className="bg-[#ffffff] rounded-full w-10 h-10 mr-[24px] flex items-center justify-center">
												<FontAwesomeIcon className="text-red" icon={faTiktok} />
											</a>
										</div>
									</div>
								</div>
								{
									(!mailSent) ?
									<Formik
										initialValues={{ email: '', username: '', lastname: '', cellphone: '', message: '', subject: '' }}
										validate={values => {
											const errors = {};
											if (!values.email) {
												errors.email = 'Este campo es requerido';
											} else if (
												!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
											) {
												errors.email = 'El formato del correo es incorrecto';
											}

											if (!values.username) {
												errors.username = 'Este campo es requerido';
											}

											if (!values.lastname) {
												errors.lastname = 'Este campo es requerido';
											}

											if (!values.message) {
												errors.location = 'Este campo es requerido';
											}

											if (!values.subject) {
												errors.specialty = 'Este campo es requerido';
											}

											if (!values.cellphone) {
												errors.cellphone = "Este campo es requerido"
											} else if (/\D/.test(values.cellphone)) {
												errors.cellphone = "Este es un campo solamente numérico"
											} else if (values.cellphone.length < 9) {
												errors.cellphone = "El número celular debe tener 9 dígitos"
											}

											return errors;
										}}
										onSubmit={(values, { setSubmitting }) => {
											// alert(JSON.stringify(values, null, 2));
											setSubmitting(false);
											console.log('the values',values);
											let data = new FormData();
											data.append('username', values.firstname);
											data.append('lastname', values.lastname);
											data.append('email', values.email);
											data.append('dni', values.cellphone);
											data.append('subject', values.subject)
											data.append('comments', values.message)
											if(values.img){
												data.append('img', values.img, "imagen.png");
											}
											console.log('the data: **** ',data);
											sendMail(values);
											// console.log(values);
										}}
									>
										{({
											values,
											errors,
											touched,
											handleChange,
											handleBlur,
											handleSubmit,
											isSubmitting,
											setFieldValue
										}) => (
											<div className="col-12 col-md-7 col-lg-6 mb-[15px] md:mb-0">
												<div className="bg-smoke p-[20px] md:px-[32px] md:py-[44px] rounded-3xl">
													<form onSubmit={handleSubmit} >
														<div className="row">
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Nombres</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.username}
																		name="username" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Escriba aquí" />
																	<p className="p-2 text-red">{errors.username && touched.username && errors.username}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Apellidos</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.lastname}
																		name="lastname" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Escriba aquí" />
																	<p className="p-2 text-red">{errors.lastname && touched.lastname && errors.lastname}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Celular / Teléfono</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.cellphone} name="cellphone" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="+51" />
																	<p className="p-2 text-red">{errors.cellphone && touched.cellphone && errors.cellphone}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">E-mail</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.email}
																		name="email" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="email" placeholder="nombre@mail.com" />
																	<p className="p-2 text-red">{errors.email && touched.email && errors.email}</p>
																</div>
															</div>
															<div className="col-md-12">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Asunto</p>
																	<select onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.subject}
																		name="subject" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff]">
																		<option value="">Selecciona</option>
																		<option value="Bolsa de trabajo">Bolsa de trabajo</option>
																		<option value="General">General</option>
																	</select>
																	<p className="p-2 text-red">{errors.subject && touched.subject && errors.subject}</p>
																</div>
															</div>
															{/* <div className="col-md-12">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Adjuntar archivos</p>
																	<div>
																		<label className="relative cursor-pointer flex items-center justify-center rounded-xl border border-gray border-dashed p-[20px] text-center" htmlFor="file-upload" id="file-drag">
																			<FontAwesomeIcon className="text-gray mr-[10px]" icon={faFile} />
																			<p className="text-left text-gray font-normal">Click para adjuntar</p>
																			<input className="block w-full h-full absolute left-0 top-0 opacity-0" id="img" type="file" name="img" onChange={(event) => setFieldValue('img', event.target.files[0])} />
																		</label>
																	</div>
																</div>
															</div> */}
															<div className="col-md-12">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Comentarios o Preguntas</p>
																	<textarea onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.message}
																		name="message" className="py-[8px] px-[16px] rounded-2xl w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" placeholder="Escriba aquí…." id="" cols="10" rows="5"></textarea>
																	<p className="p-2 text-red">{errors.message && touched.message && errors.message}</p>
																</div>
															</div>
														</div>
														<div className="row justify-center">
															<div className="col-auto">
															<button className="text-[#ffffff] rounded-full w-40 p-[6px] bg-red font-semibold text-[16px]" disabled={isSubmitting} type="submit">Enviar</button>
															</div>
														</div>
													</form>
												</div>
											</div>
										)}
									</Formik> : 
									<div className="h-[571px] flex justify-start items-center">
										<p className="w-full text-center font-bold text-3xl">Mail envíado correctamente.</p>
									</div>
								}
							</div>
						</div>
					</div>
		</section>
      </React.Fragment>
    )
  }

export { Form }