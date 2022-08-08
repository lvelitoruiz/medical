import React, { useEffect, useState } from "react";

//styles 
import './ubications.scss';
//components
import UbiCard from "./UbiCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GoogleMap, LoadScript, Marker, useGoogleMap } from '@react-google-maps/api';

import {
	faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
import { GKEY } from "../../../../consts/constants";
import { useSelector, useDispatch } from "react-redux";
import { startLoadingLocations } from "../../../../actions/locations";

const Ubications = () => {

	const dispatch = useDispatch();

	useEffect( () => {
	
		dispatch( startLoadingLocations( ) );

	}, [dispatch]);

	const containerStyle = {
		width: '100%',
		height: '100%'
	  };

	const [ ubication, setUbication ] = useState([]);
	const [ center, setCenter ] = useState({lat: 0, lng: 0});
	const [mapInstance, setMapInstance] = useState(null);

	const { locations } = useSelector( state => state.locations)

	const onMapLoad = (map) => {
		setMapInstance(map);
	};

	useEffect(() => {
		let ubication = [];
		locations.map( location => {
			ubication.push(location.attributes)
		});
		ubication.map( ubic => {
			const coord = { lat: parseFloat(ubic.lat), lng: parseFloat(ubic.long)}
			ubic.coords = coord;
		});
		setUbication(ubication);
		if(ubication.length) {
			let { coords } = ubication[0];
			setCenter(coords);
		}
	} , [locations]);

	const handleAccordion = (key) => {
		let ubications = [];
		locations.map( location => {
			ubications.push(location.attributes)
		});
		ubications.forEach( (item, index) => {
			if(index === key){
				item.status = 'active';
				mapInstance.panTo(item.coords);
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
													<p className="font-semibold">{ubication.title}</p>
													<FontAwesomeIcon className="text-red" icon={faAngleDown} />
												</div>
												<UbiCard data={ubication}/>
											</div>
										))}
									</div>
								</div>

								<div className="col-md-6 col-lg-6 h-[650px] rounded-3xl">
									<LoadScript
										googleMapsApiKey={GKEY}
									>
										<GoogleMap
											mapContainerStyle={containerStyle}
											center={center}
											zoom={18}
											onLoad={onMapLoad}
											>
												{ubication.map( ( item,index ) => (<Marker
															key={index}
															position={item.coords}
														/>))
													}
												
										</GoogleMap>
									</LoadScript>
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