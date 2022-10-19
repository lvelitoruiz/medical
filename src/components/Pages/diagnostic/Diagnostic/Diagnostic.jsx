import React from "react"

// //components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import './Diagnostic.scss';

import { useState } from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { IMGURL } from "../../../../consts/constants"

const Diagnostic = ({elementIndex,diagnosticArray}) => {


  const [ servicesDigital,setDiagnostics ] = useState([]);
  const [ centerImage,setCenterImage ] = useState("");
  const [ centerContent,setCenterContent ] = useState("");
  

  useEffect(() => {
    let diagnostic = [];
      diagnosticArray.map( element => (
        diagnostic.push(element)
      ));
      diagnostic.forEach( (item, index) => {
        if(index === elementIndex){
          item.status = 'active';
          setCenterImage(item.imagedate.data.attributes.url);
          setCenterContent(item.Content);
        } else {
          item.status = '';
        }
      });
		setDiagnostics(diagnostic);
	} , [diagnosticArray]);

  const handleChange = (key) => {
    let diagnostic = [];
		servicesDigital.map( element => (
			diagnostic.push(element)
    ));
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
            <ul className="text-black-light xl:text-base text-sm font-bold xl:text-left xl:ml-14 ml-5 flex overflow-x-hidden justify-between content-center xl:flex-col xl:w-3/4">
                        {
													(servicesDigital.length) ? 
													servicesDigital.map( (elmt,index) => {
														return(
                            <li onClick={() => handleChange(index)} className={`${elmt.status === 'active' ? 'text-red bg-white ' : '' } hover:text-red cursor-pointer rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 mr-3 border border-solid whitespace-nowrap flex items-center`} key={index}>
                              <p>{elmt.title}</p>
                              {
                                (elmt.status === 'active') ? <FontAwesomeIcon
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
