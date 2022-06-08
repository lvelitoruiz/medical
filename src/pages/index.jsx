import React from "react";

//components
import { Footer } from "../includes/footer/Footer";
import { Navbar } from "../includes/navbar/Navbar"
import { Banner } from "../components/Pages/home/Banner/Banner";
import { Info } from "../components/Pages/home/Info/Info";

const IndexPage = () => {
	return(
		<React.Fragment>
			<Navbar />
				<Info />
			<Footer />
		</React.Fragment>
	);
}

export default IndexPage ;