import React from "react";
import { useEffect } from "react";

//components
import { Info } from "../components/Pages/home/Info/Info";
import { Footer } from "../includes/footer/Footer";
import { Navbar } from "../includes/navbar/Navbar"
import { Banner } from "../components/Pages/home/Banner/Banner";
import { Services } from "../components/Pages/home/Services/Services";
import { Testimonial } from "../components/Pages/home/Testimonials/Testimonial";
import { JoinUs } from "../components/Pages/home/Join-us/Join-us";
import { Ubications } from "../components/Pages/home/Ubications/Ubications";

import { useDispatch } from 'react-redux';
import { startLoadingLocations } from '../actions/locations';
import { startLoadingBanners } from "../actions/banners";
import { startLoadingAdvantages } from "../actions/advantages";
import { startLoadingTestimonials } from "../actions/testimonials";
import { useSelector } from "react-redux";
import { useState } from "react";
import { startLoadingLaboratories } from "../actions/laboratories";
import { startLoadingDiagnostics } from "../actions/diagnostics";
import { startLoadingValues } from "../actions/values";
import { startLoadingStaff } from "../actions/staff";
import { startLoadingAbout } from "../actions/about";
import { startLoadingCases } from "../actions/cases";
import { startLoadingCats } from "../actions/cats";

const IndexPage = () => {

	const dispatch = useDispatch();

	useEffect( () => {
		
		dispatch( startLoadingLocations( ) );
		dispatch( startLoadingBanners( ) );
		dispatch( startLoadingAdvantages( ) );
		dispatch( startLoadingTestimonials( ) );
		dispatch( startLoadingLaboratories( ) );
		dispatch( startLoadingDiagnostics( ) );
		dispatch( startLoadingValues( ) );
		dispatch( startLoadingStaff( ) );
		dispatch( startLoadingAbout( ) );
		dispatch( startLoadingCases( ) );
		dispatch( startLoadingCats( ) );

	}, [dispatch]);

	const { banners } = useSelector( state => state.banners);
	const [attributes,setAttributes] = useState([]);
	const [homeImage,setHomeImage] = useState("");
	const [homeTitle,setHomeTitle] = useState("");

	useEffect( () => {
		if(banners.length) {
			setAttributes(banners[0].attributes);
		}
	}, [banners])
	
	useEffect( () => {
		if(attributes && attributes.homeImageDate) {
			const { homeTitle } = attributes;
			const url = attributes.homeImageDate.data[0].attributes.url;
			setHomeImage(url);
			setHomeTitle(homeTitle);
		}
	}, [attributes] )


	return (
		<React.Fragment>
			<Navbar laboratoriesMenu={true} diagnosticsMenu={true} />
			{
				(attributes) ? <Banner bg={homeImage} text={homeTitle} /> : ""
			}
			<Info />
			<Services />
			<Testimonial />
			<JoinUs />
			<Ubications />
			<Footer />
		</React.Fragment>
	);
}

export default IndexPage;