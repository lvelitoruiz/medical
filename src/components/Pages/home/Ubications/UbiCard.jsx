import React from "react";
import './ubications.scss';

const UbiCard = ({data}) => {
	return(
		<React.Fragment>
			<hr />
			<div className="selector_content">
				<div className="selector_group">
					<span className="icon phone"></span><p>{data.phone}</p>
				</div>
				<div className="selector_group">
					<span className="icon email"></span><p>{data.email}</p>
				</div>
				<div className="selector_group">
					<span className="icon schedule"></span><p>{data.schedule}</p>
				</div>
				<div className="selector_group">
					<span className="icon map"></span><p>{data.reference}</p>
				</div>
			</div>
		</React.Fragment>
	);
};
export default UbiCard;
