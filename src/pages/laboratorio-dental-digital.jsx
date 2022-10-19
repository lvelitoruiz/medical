import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { Laboratory } from "../components/Pages/laboratory/Laboratory/Laboratory";
import { BannerMultiple } from "../components/BannerMultiple/BannerMultiple";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { startLoadingBanners } from "../actions/banners";
import { startLoadingLaboratories } from "../actions/laboratories";


const DigitalLab = ({location}) => {

	const dispatch = useDispatch();

	useEffect( () => {
		
		dispatch( startLoadingBanners( ) );
		dispatch( startLoadingLaboratories( ) );

	}, [dispatch]);

	const [elementIndex,setElementIndex] = useState(null);

	const itemLocal = typeof window !== 'undefined' && localStorage.getItem('labLocal');
	
	const { banners } = useSelector( state => state.banners);
	const {laboratories} = useSelector( state => state.laboratories);
	const [ servicesImages,setServices ] = useState([]);
	const [atribs,setAtribs] = useState(null);
	const [laboratoryImage,setImage] = useState("");
	const [laboratoryTitle,setTitle] = useState("");
	

	useEffect(() => {
		let info = [];
		laboratories.map( diagnostic => (
			info.push(diagnostic.attributes)
		));
		setServices(info);
	} , [laboratories]);

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
		if(location.state !== null) {
			setElementIndex(location.state.getElement);
			typeof window !== 'undefined' && localStorage.setItem('labLocal',location.state.getElement);
		} else {
			if(itemLocal !== null) {
				setElementIndex(parseInt(itemLocal))
			} else {
				setElementIndex(0);
			}
		}
	}, [location])


	return(
		<React.Fragment>
			<Navbar diagnosticsMenu={true} />
			<BannerMultiple bg={laboratoryImage} text={laboratoryTitle} />
			{ ( servicesImages.length && elementIndex !== null) ? <Laboratory  elementIndex={elementIndex} laboratoriesArray={servicesImages} /> : "" }
			<Footer />
		</React.Fragment>
	);
}

export default DigitalLab ;