import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { Laboratory } from "../components/Pages/laboratory/Laboratory/Laboratory";
import { BannerMultiple } from "../components/BannerMultiple/BannerMultiple";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const DigitalLab = ({location}) => {

	const [elementIndex,setElementIndex] = useState(null);

	const { banners } = useSelector( state => state.banners);
	const [atribs,setAtribs] = useState(null);
	const [laboratoryImage,setImage] = useState("");
	const [laboratoryTitle,setTitle] = useState("");
	

	useEffect(() => {
		if(banners.length) {
			setAtribs(banners[0].attributes)
		}
	},[banners])

	useEffect(() => {
		if(atribs !== null) {
			const url = atribs.laboratoryImageDate.data[0].attributes.url;
			setImage(url);
			setTitle(atribs.laboratoryTitle);
		}
	},[atribs])

	useEffect(() => {
		setElementIndex(location.state.getElement)
	}, [location])


	return(
		<React.Fragment>
			<Navbar diagnosticsMenu={true} />
			<BannerMultiple bg={laboratoryImage} text={laboratoryTitle} />
			<Laboratory  elementIndex={elementIndex} />
			<Footer />
		</React.Fragment>
	);
}

export default DigitalLab ;