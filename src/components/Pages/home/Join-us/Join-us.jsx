import React from "react";

//styles 
import './join-us.scss';
//components

const JoinUs = () => {
	return(
		<React.Fragment>
			<section id="join_us" className="">
				<div className="background_img"></div>	
				<div className="gradient_container"></div>
				<div className="container">
					<div className="row">
						<div className="col">



							<div className="text_container">
								<div className="icon_container">
									<span className="icon"></span>
								</div>

								<h2 className="title">
									<span className="emphasis">
									Únete a nuestra red<br />
									de odontólogos <br />
									</span>
								</h2>	
							</div>

							<div className="form_container">
								<form action="" className="form">
									<div className="form_group">
										<label htmlFor="">Nombre</label>
										<input type="text" placeholder="Nombre"/>
									</div>
									<div className="form_group">
										<label htmlFor="">Apellidos</label>
										<input type="text" placeholder="Apellido"/>
									</div>

									<div className="form_group">
										<label htmlFor="">Fecha de nacimiento</label>
										<input type="date" placeholder="Fecha de nacimiento"/>
									</div>
									<div className="form_group">
										<label htmlFor="">DNI</label>
										<input type="text" placeholder="81433499"/>
									</div>

									<div className="form_group">
										<label htmlFor="">Correo electrónico</label>
										<input type="text" placeholder="micorreo@gmail.com"/>
									</div>
									<div className="form_group">
										<label htmlFor="">Celular</label>
										<input type="text" placeholder="945910122"/>
									</div>

									<div className="form_group">
										<label htmlFor="">Dirección</label>
										<input type="text" placeholder="Jr. Crocane 420"/>
									</div>
									<div className="form_group">
										<label htmlFor="">Especialidad</label>
										<select name="" id="">
											<option value="">Seleccionar</option>
											<option value="">option 1</option>
											<option value="">option 2</option>
											<option value="">option 3</option>
										</select>
									</div>

									<div className="form_group">
										<label htmlFor="">Sedes de preferencia</label>
										<select name="" id="">
											<option value="">Selecciona las sedes</option>
											<option value="">option 1</option>
											<option value="">option 2</option>
											<option value="">option 3</option>
										</select>
									</div>
									<div className="form_group">
										<label htmlFor="">Cop</label>
										<input type="number" placeholder="9895"/>
									</div>

									<button type="submit">
										Afiliarme
									</button>
								</form>
							</div>
							
							
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export  {JoinUs};