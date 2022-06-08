import React from "react";

//components
import { Footer } from "../includes/footer/Footer";
import { Navbar } from "../includes/navbar/Navbar"
import { Banner } from "../components/Pages/home/Banner/Banner";
import { Services } from "../components/Pages/home/Services/Services";
import { Info } from "../components/Pages/home/Info/Info";

const IndexPage = () => {
	return(
		<React.Fragment>
			<Navbar />
				<Info />
				<Services />
			<Footer />
		</React.Fragment>
	);
}

export default IndexPage ;