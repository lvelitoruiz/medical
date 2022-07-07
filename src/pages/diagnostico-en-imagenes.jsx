import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { BannerDiagnostic } from "../components/Pages/diagnostic/BannerDiagnostic/BannerDiagnostic";
import { Diagnostic } from "../components/Pages/diagnostic/Diagnostic/Diagnostic";

const DiagnosticImaging = () => {
	return(
		<React.Fragment>
			<Navbar />
			<BannerDiagnostic />
			<Diagnostic />
			<Footer />
		</React.Fragment>
	);
}

export default DiagnosticImaging ;