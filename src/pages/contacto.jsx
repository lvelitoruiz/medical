import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { Ubications } from "../components/Pages/home/Ubications/Ubications";
import { Form } from "../components/Pages/contacto/form";


const Contacto = () => {
	return(
		<React.Fragment>
			<Navbar  laboratoriesMenu={true} diagnosticsMenu={true} />
			<Form />
			<Ubications />
			<Footer />
		</React.Fragment>
	);
}

export default Contacto ;