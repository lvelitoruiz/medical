import React from "react";

//components
import { Footer } from "../includes/footer/Footer";
import { Navbar } from "../includes/navbar/Navbar"

const Error404 = () => {
	return(
		<React.Fragment>
			<Navbar />
				Error 404
			<Footer />
		</React.Fragment>
	);
}

export default Error404 ;