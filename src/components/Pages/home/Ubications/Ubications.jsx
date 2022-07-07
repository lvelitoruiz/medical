import React, { useEffect, useState } from "react";

//styles 
import './ubications.scss';
//components
import UbiCard from "./UbiCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faAngleDown,
} from '@fortawesome/free-solid-svg-icons'

const Ubications = () => {
	const ubications = [
		{status: 'active', place: 'Jesus Maria', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'},
		{status: '', place: 'Ate Vitarte', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{status: '', place: 'San Juan de Lurigancho', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{status: '', place: 'Los olivos', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{status: '', place: 'Villa el salvador', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{status: '', place: 'Callao', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'}, 
		{status: '', place: 'Chorrillos', phone:'(01)3874207 / 985 266 451', email: 'admin@medicaldent.com', schedule: 'Lunes a sabado: 8am a 1pm y 2pm a 8pm', reference: 'av. Próceres de la independencia 1724 2do piso (a 1 cuadra. de estación de tren los jardines'},
	]

	const [ ubication, setUbication ] = useState([]);

	useEffect(() => {
		setUbication(ubications);
	} , []);

	const handleAccordion = (key) => {
		console.log('key', key);
		ubications.forEach( (item, index) => {
			if(index === key){
				item.status = 'active';
			} else {
				item.status = '';
			}
		});
		
		setUbication(ubications);
	}

	return(
		<React.Fragment>
			<section className="py-[40px] lg:py-[90px]">
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">

							<div>
								<h2 className="text-center font-semibold text-[30px] lg:text-[40px] mb-[40px] lg:mb-[60px] leading-[38px] lg:leading-[48px]">
									Conoce nuestras sedes
								</h2>	
							</div>

							<div className="row d-flex items-start justify-between">
								<div className="col-md-6 col-lg-5 mb-[20px] lg:mb-0">
									<div>
										{ubication.map((ubication, key) => (
											<div className="bg-smoke mb-[15px] rounded-[20px]" key={key}>
												<div className="cursor-pointer flex items-center justify-between py-[10px] px-[20px]" onClick={() => handleAccordion(key)}>
													<p className="font-semibold">{ubication.place}</p>
													<FontAwesomeIcon className="text-red" icon={faAngleDown} />
												</div>
												<UbiCard data={ubication}/>
											</div>
										))}
									</div>
								</div>

								<div className="col-md-6 col-lg-6">
									<div>
										<img src="" alt="map" className="bg-[#cccccc] h-[650px] rounded-3xl" />
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
export  {Ubications};