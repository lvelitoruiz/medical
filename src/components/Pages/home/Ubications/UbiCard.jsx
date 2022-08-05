import React from "react";
import './ubications.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faEnvelope,
	faPhone,
	faCalendar,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons'


const UbiCard = ({data}) => {

	return(
		<React.Fragment>
			{/* add class active */}
			<div className={'g-accordion--container ' + data.status}>
				<div className="py-[16px] flex flex-col">
					<div className="my-[10px] flex items-start">
						<FontAwesomeIcon className="mr-[10px] pt-[4px] text-gray" icon={faPhone} />
						<p>{data.phone}</p>
					</div>
					<div className="my-[10px] flex items-start">
						<FontAwesomeIcon className="mr-[10px] pt-[4px] text-gray" icon={faEnvelope} />
						<p>{data.email}</p>
					</div>
					<div className="my-[10px] flex items-start">
						<FontAwesomeIcon className="mr-[10px] pt-[4px] text-gray" icon={faCalendar} />
						<p>{data.schedule}</p>
					</div>
					<div className="my-[10px] flex items-start">
						<FontAwesomeIcon className="mr-[10px] pt-[4px] text-gray" icon={faLocationDot} />
						<p>{data.address}</p>
					</div>
					</div>
			</div>
		</React.Fragment>
	);
};
export default UbiCard;
