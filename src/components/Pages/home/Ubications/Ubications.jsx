import React from "react";

//styles 
import './ubications.scss';
//components
import UbiCard from "./UbiCard";

const Ubications = () => {
	const ubications = [
		{place: 'Jesus Maria', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'},
		{place: 'Jesus Maria', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{place: 'Jesus Maria', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{place: 'Jesus Maria', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{place: 'Jesus Maria', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{place: 'Jesus Maria', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{place: 'Jesus Maria', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{place: 'Jesus Maria', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
	]

	return(
		<React.Fragment>
			<section id="home_ubications" className="">
				<div className="container">
					<div className="row">
						<div className="col">

							<div className="text_container">
								<h2 className="title">
									<span className="emphasis">
										Conoce nuestras cedes
									</span>
								</h2>	
							</div>

							<div className="selector_container">
								{ubications.map((ubication, key) => (
									<div className="selector" key={key}>
										<p className="selector_title">{ubication.place}</p><span className="selector_icon"></span>
										<UbiCard data={ubication}/>
									</div>
								))}
							</div>

							<div className="map_container">
								<div className="map">
									<img src="" alt="map" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}
export  {Ubications};