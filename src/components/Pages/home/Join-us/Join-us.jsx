import React from "react";
import { Formik } from 'formik';

//styles 
import './join-us.scss';
//components

import icon1 from "../../../../assets/img/redodontologos@3x.png";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import axios from 'axios';



const JoinUs = () => {

	const [ servicesDigital,setDiagnostics ] = useState([]);
	const {diagnostics} = useSelector( state => state.diagnostics);
	const [mailSent,setMailSent] = useState(false);


	const sendMail = async (values) => {

		const data = { data: values };
		console.log(data);
		const APIURL = process.env.GATSBY_API_URL;

		var config = {
			method: 'post',
			url: `${APIURL}dentist-enrollments`,
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

	useEffect(() => {
		let info = [];
		diagnostics.map( diagnostic => (
			info.push(diagnostic.attributes)
		));
		setDiagnostics(info);
	} , [diagnostics]);

	return (
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

							{
								(!mailSent) ?
								<Formik
									initialValues={{ email: '', username: '', lastname: '', dni: '', cellphone: '', location: '', cop: '', birth: '', ubication: '', specialty: '' }}
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

										if (!values.location) {
											errors.location = 'Este campo es requerido';
										}

										if (!values.ubication) {
											errors.ubication = 'Este campo es requerido';
										}

										if (!values.birth) {
											errors.birth = 'Este campo es requerido';
										}

										if (!values.specialty) {
											errors.specialty = 'Este campo es requerido';
										}

										if (!values.dni) {
											errors.dni = "Este campo es requerido"
										} else if (/\D/.test(values.dni)) {
											errors.dni = "Este es un campo solamente numérico"
										} else if (values.dni.length < 8) {
											errors.dni = "El DNI debe tener 8 dígitos"
										}

										if (!values.cellphone) {
											errors.cellphone = "Este campo es requerido"
										} else if (/\D/.test(values.cellphone)) {
											errors.cellphone = "Este es un campo solamente numérico"
										} else if (values.cellphone.length < 9) {
											errors.cellphone = "El número celular debe tener 9 dígitos"
										}

										if (!values.cop) {
											errors.cop = "Este campo es requerido"
										} else if (/\D/.test(values.cop)) {
											errors.cop = "Este es un campo solamente numérico"
										} else if (values.cop.length < 4) {
											errors.cop = "El número COP debe tener 4 dígitos"
										}

										return errors;
									}}
									onSubmit={(values, { setSubmitting }) => {
										// alert(JSON.stringify(values, null, 2));
										sendMail(values);
										setSubmitting(false);
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
										isSubmitting
									}) => (
										<div className="row">
											<div className="col-lg-6">
												<div className="lg:mt-[64px] mt-[50px]">
													<form onSubmit={handleSubmit} className="form">
														<div className="row">
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Nombre</p>
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
																		value={values.lastname} name="lastname" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Tu nombre" />
																	<p className="p-2 text-red">{errors.lastname && touched.lastname && errors.lastname}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Fecha de nacimiento</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.birth} name="birth" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="date" placeholder="Tus apellidos" />
																	<p className="p-2 text-red">{errors.birth && touched.birth && errors.birth}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">DNI</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.dni}
																		name="dni" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Tu número de DNI" />
																	<p className="p-2 text-red">{errors.dni && touched.dni && errors.dni}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Correo electrónico</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.email}
																		name="email" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="email" placeholder="micorreo@gmail.com" />
																	<p className="p-2 text-red">{errors.email && touched.email && errors.email}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Celular</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.cellphone} name="cellphone" 
																		className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="number" placeholder="Tu número telefónico" />
																	<p className="p-2 text-red">{errors.cellphone && touched.cellphone && errors.cellphone}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Dirección</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.location} name="location" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Tu dirección" />
																	<p className="p-2 text-red">{errors.location && touched.location && errors.location}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Especialidad</p>
																	<select onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.specialty} name="specialty" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff]">
																		<option value="">Seleccionar</option>
																		{
																			(servicesDigital.length) ? 
																			servicesDigital.map( (elmt,index) => {
																				return(<option value={elmt.title} key={index}>{elmt.title}</option>)
																			})
																			: ""
																		}
																	</select>
																	<p className="p-2 text-red">{errors.specialty && touched.specialty && errors.specialty}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Sedes de preferencia</p>
																	<select onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.ubication} name="ubication" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff]">
																		<option value="">Selecciona la sede</option>
																		<option value="Jesús María">Jesús María</option>
																		<option value="Ate">Ate Vitarte</option>
																		<option value="SJL">San Juan de Lurigancho</option>
																		<option value="Los Olivos">Los Olivos</option>
																		<option value="Villa el Salvador">Villa el salvador</option>
																		<option value="Callao">Callao</option>
																		<option value="Chorrillos">Chorrillos</option>
																	</select>
																	<p className="p-2 text-red">{errors.ubication && touched.ubication && errors.location}</p>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-[20px]">
																	<p className="font-normal pb-[8px] pl-[16px]">Cop</p>
																	<input onChange={handleChange}
																		onBlur={handleBlur}
																		value={values.cop} name="cop" className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="number" placeholder="Número COP" />
																	<p className="p-2 text-red">{errors.cop && touched.cop && errors.cop}</p>
																</div>
															</div>
														</div>
														<div className="row mt-[40px]">
															<div className="col-md-4">
																<button className="text-[#ffffff] rounded-full w-full p-[6px] bg-red font-semibold text-[16px]" disabled={isSubmitting} type="submit">
																	Afiliarme
																</button>
															</div>
														</div>
													</form>
												</div>
											</div>
										</div>
									)}
								</Formik> :
								<div className="h-[683px] flex justify-start items-center">
									<p className="w-1/2 text-center font-bold text-3xl">Mail envíado correctamente.</p>
								</div>
							}
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export { JoinUs };