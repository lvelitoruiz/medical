import React from "react";
//styles
import './testimonial.scss'
//components

const Testimonial = () => {
	return(
		<React.Fragment>
			<section id="home_info" className="">
				<div className="container">
					<div className="row">
						<div className="col">

							<h2 className="title"><span className="emphasis">Testimonio de nuestros clientes</span></h2>
							
							<div className="card_container">
								<div className="card">
									<div className="img_container">
										<img src="" alt="" />
									</div>
									<div className="content">

										<span className="card_icon"></span>

										<p className="title"></p>
										<span className="description"></span>

										<div className="more_info">
											<p className="title"></p>
											<span className="description"></span>
										</div>
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

export  {Testimonial};