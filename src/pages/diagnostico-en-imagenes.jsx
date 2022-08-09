import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { Diagnostic } from "../components/Pages/diagnostic/Diagnostic/Diagnostic";
import { BannerMultiple } from "../components/BannerMultiple/BannerMultiple";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { startLoadingBanners } from "../actions/banners";

const DiagnosticImaging = ({location}) => {
	
	const dispatch = useDispatch();

	useEffect( () => {
		
		dispatch( startLoadingBanners( ) );

	}, [dispatch]);
	
	const [elementIndex,setElementIndex] = useState(null);

	const { banners } = useSelector( state => state.banners);

	const [atribs,setAtribs] = useState(null);
	const [diagnosticImage,setImage] = useState("");
	const [diagnosticTitle,setTitle] = useState("");
	

	useEffect(() => {
		if(banners.length) {
			setAtribs(banners[0].attributes)
		}
	},[banners])

	useEffect(() => {
		if(atribs !== null) {
			const url = atribs.diagnosticImageDate.data[0].attributes.url;
			setImage(url);
			setTitle(atribs.diagnosticTitle);
		}
	},[atribs])

	useEffect(() => {
		setElementIndex(location.state.getElement)
	}, [location])

	useEffect( () => {
	}, [elementIndex])

	return(
		<React.Fragment>
			<Navbar laboratoriesMenu={true} />
			<BannerMultiple bg={diagnosticImage} text={diagnosticTitle} />
			<Diagnostic elementIndex={elementIndex} />
			<Footer />
		</React.Fragment>
	);
}

export default DiagnosticImaging ;