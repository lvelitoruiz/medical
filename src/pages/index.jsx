import React from "react";

//components
import { Info } from "../components/Pages/home/Info/Info";
import { Footer } from "../includes/footer/Footer";
import { Navbar } from "../includes/navbar/Navbar"
import { Banner } from "../components/Pages/home/Banner/Banner";
import { Services } from "../components/Pages/home/Services/Services";
import { Testimonial } from "../components/Pages/home/Testimonials/Testimonial";
import { JoinUs } from "../components/Pages/home/Join-us/Join-us";
import { Ubications } from "../components/Pages/home/Ubications/Ubications";

const IndexPage = () => {
	return(
		<React.Fragment>
			<Navbar />
			<Banner />
			<Info />
			<Services />
			<Testimonial />
			<JoinUs />
			<Ubications />
			<Footer />
		</React.Fragment>
	);
}

export default IndexPage ;