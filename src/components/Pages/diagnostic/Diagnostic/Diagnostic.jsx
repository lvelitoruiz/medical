import React from "react"

// //components
import { Link } from "gatsby"
import maxilofacial from "../../../../assets/img/maxilofacial.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons"
import './Diagnostic.scss';

import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { IMGURL } from "../../../../consts/constants"

const Diagnostic = ({elementIndex}) => {

  const [ servicesDigital,setDiagnostics ] = useState([]);
  const [ centerImage,setCenterImage ] = useState("");
  const [ centerContent,setCenterContent ] = useState("");
  const {diagnostics} = useSelector( state => state.diagnostics);

  useEffect(() => {
		let info = [];
		diagnostics.map( diagnostic => {
			info.push(diagnostic.attributes)
		});
		setDiagnostics(info);
	} , [diagnostics]);

  useEffect( () => {
    if(elementIndex !== null && servicesDigital.length) {
      servicesDigital.forEach( (item, index) => {
        if(index === elementIndex){
          item.status = 'active';
          setCenterImage(item.imagedate.data.attributes.url);
          setCenterContent(item.Content);
        } else {
          item.status = '';
        }
      });
    }
  },[elementIndex])

  const handleChange = (key) => {
    let diagnostic = [];
		servicesDigital.map( element => {
			diagnostic.push(element)
		});
		diagnostic.forEach( (item, index) => {
			if(index === key){
				item.status = 'active';
        setCenterImage(item.imagedate.data.attributes.url);
        setCenterContent(item.Content);
			} else {
				item.status = '';
			}
		});
		
		setDiagnostics(diagnostic);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="xl:grid xl:grid-cols-12 mb-[160px]">
          <nav className="xl:col-span-4 xl:py-[30px]">
            <div className=" border-2 border-smoke py-5 px-[25px] lg:px-[75px]">
              <h3 className="text-gray text-2xl font-bold mb-[10px]">Especialidades</h3>
            </div>
            <ul className="text-black-light xl:text-base text-sm font-bold xl:text-left xl:ml-14 ml-5 flex overflow-x-scroll justify-between content-center xl:flex-col xl:w-3/4">
                        {
													(servicesDigital.length) ? 
													servicesDigital.map( (elmt,index) => {
														return(
                            <li onClick={() => handleChange(index)} className={`${elmt.status == 'active' ? 'text-red bg-white ' : '' } hover:text-red cursor-pointer rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 mr-3 border border-solid border-2 whitespace-nowrap flex items-center`} key={index}>
                              <p>{elmt.title}</p>
                              {
                                (elmt.status == 'active') ? <FontAwesomeIcon
                                      className="text-red text-[18px] ml-3 w-[18px]"
                                      icon={faArrowRight}
                                    /> : ""
                              }
                            </li>
                          )
													})
													: ""
												}
            </ul>
          </nav>
          <section className="col-span-8 pt-[20px] lg:pt-[80px]">
            <div className="md:grid md:grid-cols-12 p-5 lg:p-10 bg-smoke rounded-[24px] gap-6">
              <div className="md:col-span-6 mb-16 pr-4" id="markdown-content">
                <ReactMarkdown>
                   { (servicesDigital.length) ? centerContent : "" }
                </ReactMarkdown>
                {/* <div className="mb-[40px]">
                  <h3 className="text-2xl font-bold mb-7">
                    Estudios Radiográficos
                  </h3>
                  <ul className="text-black md:text-base text-sm font-normal">
                    <li className="mb-3 ml-3 flex">
                      <FontAwesomeIcon
                        className="text-red text-xs mr-4 mt-1 w-[8px]"
                        icon={faCircle}
                      />
                      <p>
                        <b>Intraorales:</b> Periapical, Oclusal, Bitewing,
                        Periapical Seriada y Estudio de Localización.
                      </p>
                    </li>
                    <li className="mb-3 ml-3 flex">
                      <FontAwesomeIcon
                        className="text-red text-xs mr-4 mt-1 w-[8px]"
                        icon={faCircle}
                      />
                      <p>
                        <b>Extraorales:</b> Panorámica, Cefalométrica, Carpal, ATM
                        y Postero Anterior.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mb-[40px]">
                  <h3 className="text-2xl font-bold mb-7">
                    Tomografía Cone Beam 3D
                  </h3>
                  <ul className="text-black md:text-base text-sm font-normal">
                    <li className="mb-3 ml-3 flex">
                      <FontAwesomeIcon
                        className="text-red text-xs mr-4 mt-1 w-[8px]"
                        icon={faCircle}
                      />
                      <p>
                        Tomografía C/I - S/I
                      </p>
                    </li>
                    <li className="mb-3 ml-3 flex">
                      <FontAwesomeIcon
                        className="text-red text-xs mr-4 mt-1 w-[8px]"
                        icon={faCircle}
                      />
                      <p>
                        Tomografía 3D para Endodoncia. FOV pequeño
                      </p>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="md:col-span-6 object-center">
              { (servicesDigital.length && centerImage !== "") ? <img src={`${IMGURL}${centerImage}`} alt="" className="lg:max-w-full" /> : "" }
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

export { Diagnostic }
