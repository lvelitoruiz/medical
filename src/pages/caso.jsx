import React from "react";

//components
import { Navbar } from "../includes/navbar/Navbar";
import { Footer } from "../includes/footer/Footer";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowLeft,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons'


import {
	faFacebookF,
	faLinkedinIn,
	faTwitter
}	from '@fortawesome/free-brands-svg-icons'
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { IMGURL } from "../consts/constants";
import ReactMarkdown from "react-markdown";

const Caso = ({location,props}) => {

	const [elementIndex,setElementIndex] = useState(null);
	const [clinicCase,setClinicCase] = useState({});
	const [images,setImages] = useState([]);
	const {cases} = useSelector( state => state.cases);

	useEffect(() => {
		setElementIndex(location.state.getElement)
	}, [location])

	useEffect(() => {
		if(cases.length && elementIndex !== null) {
			setClinicCase(cases[elementIndex].attributes)
			setImages(cases[elementIndex].attributes.images.data)
		}
	}, [cases,elementIndex])

	return(
		<React.Fragment>
			<Navbar laboratoriesMenu={true} diagnosticsMenu={true} />
			<section className="container">
				<div className="row pt-[120px]">
					<div className="col-12 col-md-6 mb-[15px] md:mb-0">
						<Link className="flex items-center" to="/casos-clinicos">
							<FontAwesomeIcon className="text-[#607D8B] mr-[7px]" icon={faArrowLeft} />
							<span className="text-black text-[16px] font-semibold">Regresar a Casos clínicos</span>
						</Link>
					</div>
				</div>
				<div className="row justify-center pt-[48px]">
					<div className="col-lg-8">
						<div className="row">
							<div className="col-12">
								<h1 className="text-center font-semibold text-[30px] lg:text-[40px] text-[#607D8B] leading-[38px] lg:leading-[48px]">{clinicCase.title}</h1>
							</div>
							<div className="col-12 pt-[48px]">
								<div className="flex items-center justify-center">
									<p className="text-[#B0BEC5]">Compartir:</p>
									<div className="flex items-center ml-[10px]">
										<a href="">
											<FontAwesomeIcon className="text-[#B0BEC5] mr-[16px]" icon={faFacebookF} />
										</a>
										<a href="">
											<FontAwesomeIcon className="text-[#B0BEC5] mr-[16px]" icon={faLinkedinIn} />
										</a>
										<a href="">
											<FontAwesomeIcon className="text-[#B0BEC5] mr-[16px]" icon={faTwitter} />
										</a>
										<a href="">
											<FontAwesomeIcon className="text-[#B0BEC5] mr-[16px]" icon={faEnvelope} />
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-12 pt-[48px]">
								{
									(images.length ) ? <img className="w-full h-[332px] lg:h-[632px] rounded-[30px] mb-[20px] md:mb-0 object-cover" src={`${IMGURL}${clinicCase.image.data.attributes.url}`} alt="" /> : ""
								}
							</div>
							<div className="col-lg-12 text-center text-[16px] text-[#455A64] leading-[24px] my-[64px]">
								<ReactMarkdown>
								{/* <p className="text-center text-[16px] text-[#455A64] leading-[24px] my-[64px]">{clinicCase.text}</p> */}
									{clinicCase.text}
								</ReactMarkdown>
							</div>
						</div>
						<div className="row border-b border-solid border-smoke pb-[30px]">
							{
								(images.length ) ? images.map( (element,index) => {
									return(
										<div className="col-md-6 mb-[32px]" key={index}>
											<img className="w-full h-[300px] rounded-lg mb-[20px] md:mb-0 object-cover" src={`${IMGURL}${element.attributes.url}`} alt="" />
										</div>
									)
								}) : "nothing here"
							}
						</div>
						<div className="row border-b border-solid border-smoke">
							<div className="col-12 pt-[40px]">
								<h3 className="text-center font-semibold text-[30px] lg:text-[24px] text-[#607D8B] leading-[32px] lg:leading-[48px]">Comentarios</h3>
							</div>
							<div className="col-12 text-center text-[16px] text-[#455A64] leading-[24px] mt-[32px] mb-[64px]">
								<ReactMarkdown>
									{/* <p className="text-center text-[16px] text-[#455A64] leading-[24px] mt-[32px] mb-[64px]">{clinicCase.comments}</p> */}
									{clinicCase.comments}
								</ReactMarkdown>
							</div>
						</div>
						<div className="row justify-center my-[40px]"><div className="col-auto"><button className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full">Siguiente caso</button></div></div>
					</div>
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
}

export default Caso ;