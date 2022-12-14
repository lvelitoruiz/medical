import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { BannerUs } from "../components/Pages/nosotros/BannerUs/BannerUs";
import { AboutUs } from "../components/Pages/nosotros/About-us/About-us";
import { Ubications } from "../components/Pages/home/Ubications/Ubications";
import { OurValues } from "../components/Pages/nosotros/OurValues/OurValues";
import { OurStaff } from "../components/Pages/nosotros/OurStaff/OurStaff";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "../components/Modal/modal";


const Nosotros = () => {

	const [openModal,setOpenmodal] = useState(false);
	const [doctor,setDoctor] = useState("");

	const [doctorItem,setDoctorItem] = useState(null);

	useEffect( () => {
		setDoctorname('Magaly Quispe');
	},[]);

	const setDoctorname = (doc) => {
		setDoctor(doc)
	}

	const handleModal = (value,item) => {
		setOpenmodal(value);
		setDoctorItem(item);
	}

	return(
		<React.Fragment>
			<Navbar laboratoriesMenu={true} diagnosticsMenu={true} />
			<BannerUs />
			<AboutUs />
			<OurValues />
			<OurStaff handleModal={handleModal} setDoctorName={setDoctorname} />
			<Ubications />
			<Footer />
			{
				(openModal) ?
				<Modal specialist={doctor} doctorItem={doctorItem} handleModal={handleModal} /> : ""
			}
		</React.Fragment>
	);
}

export default Nosotros ;