import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { BannerUs } from "../components/Pages/nosotros/BannerUs/BannerUs";
import { AboutUs } from "../components/Pages/nosotros/About-us/About-us";
import { Ubications } from "../components/Pages/home/Ubications/Ubications";
import { OurValues } from "../components/Pages/nosotros/OurValues/OurValues";
import { OurStaff } from "../components/Pages/nosotros/OurStaff/OurStaff";

const Nosotros = () => {
	return(
		<React.Fragment>
			<Navbar />
			<BannerUs />
			<AboutUs />
			<OurValues />
			<OurStaff/>
			<Ubications />
			<Footer />
		</React.Fragment>
	);
}

export default Nosotros ;