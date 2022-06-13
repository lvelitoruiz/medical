import React from "react";

//styles 
import './banner.scss';
//components

const Banner = () => {
	return(
		<React.Fragment>
			<section id="home_banner" className="">
				<div className="container">
					<div className="row">
						<div className="col">

							<div className="text_container">
								<h2 className="title">
									<span className="emphasis">
									Tomografías 3D <br />
									con equipos de <br />
									última generación <br />
									</span>
								</h2>	
							</div>
							
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export  {Banner};