import React from "react";

//components
import { Info } from "../components/Pages/home/Info/Info";
import { Footer } from "../includes/footer/Footer";
import { Navbar } from "../includes/navbar/Navbar"
import { Banner } from "../components/Pages/home/Banner/Banner";
import { Services } from "../components/Pages/home/Services/Services";
import { Testimonial } from "../components/Pages/home/testimonials/Testimonial";

const IndexPage = () => {
	return(
		<React.Fragment>
			<Navbar />
			<Banner />
			<Info />
			<Services />
			<Testimonial />
			<Footer />
		</React.Fragment>
	);
}

export default IndexPage ;