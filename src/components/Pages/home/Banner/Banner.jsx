import React from "react";

//styles 
import './banner.scss';
//components

const Banner = () => {
	return(
		<React.Fragment>
			<section className="pt-[88px] bg-smoke pb-[44px] w-full h-[685px] lg:h-[785px] bg-[url('../assets/img/banner-mobile.jpg')] lg:bg-[url('../assets/img/banner.png')] bg-cover bg-right-bottom lg:bg-right-top">
				<div className="container">
					<div className="row justify-center">
						<div className="col-lg-11">
							<div className="row">
								<div className="col-lg-7 col-md-8">
									<div className="flex justify-center h-[600px] lg:h-[696px] lg:items-center">
										<h2 className="pt-[40px] lg:pt-0 lg:pb-[100px] text-left text-[30px] lg:text-[56px] md:text-[46px] md:leading-[62px] lg:leading-[72px] font-semibold">
											<span className="emphasis">
											Tomografías 3D con equipos de última generación
											</span>
										</h2>	
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

export  {Banner};