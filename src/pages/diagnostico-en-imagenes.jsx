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
		if(atribs !== null && location.state.getElement !== null) {
			const url = atribs.diagnosticImageDate.data[0].attributes.url;
			setImage(url);
			setTitle(atribs.diagnosticTitle);
		}
	},[atribs])

	useEffect(() => {
		setElementIndex(location.state.getElement)
	}, [location])

	// useEffect( () => {
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