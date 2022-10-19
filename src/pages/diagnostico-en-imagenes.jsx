import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { Diagnostic } from "../components/Pages/diagnostic/Diagnostic/Diagnostic";
import { BannerMultiple } from "../components/BannerMultiple/BannerMultiple";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { startLoadingBanners } from "../actions/banners";
import { startLoadingDiagnostics } from "../actions/diagnostics";

const DiagnosticImaging = ({location}) => {
	
	const dispatch = useDispatch();

	useEffect( () => {
		
		dispatch( startLoadingBanners( ) );
		dispatch( startLoadingDiagnostics( ) );

	}, [dispatch]);
	
	const [elementIndex,setElementIndex] = useState(null);

	const itemLocal = typeof window !== 'undefined' && localStorage.getItem('indexLocal');

	const { banners } = useSelector( state => state.banners);
	const {diagnostics} = useSelector( state => state.diagnostics);


	const [atribs,setAtribs] = useState(null);
	const [ servicesDigital,setDiagnostics ] = useState([]);
	const [diagnosticImage,setImage] = useState("");
	const [diagnosticTitle,setTitle] = useState("");

	useEffect(() => {
			let info = [];
			diagnostics.map( diagnostic => (
				info.push(diagnostic.attributes)
			));
			setDiagnostics(info);
	} , [diagnostics]);
	

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
		console.log('the local item: **** ',itemLocal);
		if(location.state !== null) {
			setElementIndex(location.state.getElement);
			typeof window !== 'undefined' && localStorage.setItem('indexLocal',location.state.getElement);
		} else {
			if(itemLocal !== null) {
				setElementIndex(parseInt(itemLocal))
			} else {
				setElementIndex(0);
			}
		}
	}, [location])

	// useEffect( () => {
	// 	console.log('element index: ',elementIndex);
	// }, [elementIndex])

	return(
		<React.Fragment>
			<Navbar laboratoriesMenu={true} />
			<BannerMultiple bg={diagnosticImage} text={diagnosticTitle} />
			{ ( servicesDigital.length && elementIndex !== null) ? <Diagnostic elementIndex={elementIndex} diagnosticArray={servicesDigital} /> : "" }
			<Footer />
		</React.Fragment>
	);
}

export default DiagnosticImaging ;