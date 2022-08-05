import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { BannerMultiple } from "../components/BannerMultiple/BannerMultiple";
import { useSelector } from "react-redux";
import { Casos } from "../components/Pages/casos/Casos";
import { Contact } from "../components/Pages/casos/Contact";
import { useRedux } from "../helpers/useRedux";
import { useEffect } from "react";
import { useState } from "react";


const CasosClinicos = () => {

	const { banners } = useSelector( state => state.banners);
	const [atribs,setAtribs] = useState(null);
	const [casesImage,setImage] = useState("");
	const [casesTitle,setTitle] = useState("");
	

	useEffect(() => {
		if(banners.length) {
			setAtribs(banners[0].attributes)
		}
	},[banners])

	useEffect(() => {
		if(atribs !== null) {
			const url = atribs.casesImageDate.data[0].attributes.url;
			setImage(url);
			setTitle(atribs.casesTitle);
		}
	},[atribs])

	return(
		<React.Fragment>
			<Navbar laboratoriesMenu={true} diagnosticsMenu={true} />
			{
				(atribs !== null) ? <BannerMultiple bg={casesImage} text={casesTitle} /> : ""
			}
			<Casos />
			<Contact />
			<Footer />
		</React.Fragment>
	);
}

export default CasosClinicos ;