import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { Laboratory } from "../components/Pages/laboratory/Laboratory/Laboratory";
import { BannerLaboratory } from "../components/Pages/laboratory/BannerLaboratory/BannerLaboratory";

const DigitalLab = () => {
	return(
		<React.Fragment>
			<Navbar />
			<BannerLaboratory />
			<Laboratory/>
			<Footer />
		</React.Fragment>
	);
}

export default DigitalLab ;