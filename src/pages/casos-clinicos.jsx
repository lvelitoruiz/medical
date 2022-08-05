import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { BannerMultiple } from "../components/BannerMultiple/BannerMultiple";
import { useDispatch, useSelector } from "react-redux";
import { Casos } from "../components/Pages/casos/Casos";
import { Contact } from "../components/Pages/casos/Contact";
import { useEffect } from "react";
import { useState } from "react";
import { startLoadingBanners } from "../actions/banners";

const CasosClinicos = () => {

	const dispatch = useDispatch();
	const { banners } = useSelector( state => state.banners);
	const [atribs,setAtribs] = useState(null);
	const [casesImage,setImage] = useState("");
	const [casesTitle,setTitle] = useState("");


	useEffect( () => {
		
		dispatch( startLoadingBanners( ) );

	}, [dispatch]);
	

	useEffect(() => {
		console.log('the banners: ',banners);
		if(banners !== undefined && banners.length) {
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