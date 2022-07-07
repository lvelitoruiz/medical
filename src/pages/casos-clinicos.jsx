import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { BannerCaso } from "../components/Pages/casos/BannerCaso";
import { Casos } from "../components/Pages/casos/Casos";
import { Contact } from "../components/Pages/casos/Contact";


const CasosClinicos = () => {
	return(
		<React.Fragment>
			<Navbar />
			<BannerCaso/>
			<Casos />
			<Contact />
			<Footer />
		</React.Fragment>
	);
}

export default CasosClinicos ;