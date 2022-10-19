import React from "react"

// //components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import './Laboratory.scss';

import { useState } from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { IMGURL } from "../../../../consts/constants"

const Laboratory = ({elementIndex,laboratoriesArray}) => {

  const [ servicesImages,setServices ] = useState([]);
  const [ centerImage,setCenterImage ] = useState("");
  const [ centerContent,setCenterContent ] = useState("");

  useEffect(() => {
		let laboratory = [];
      laboratoriesArray.map( element => (
        laboratory.push(element)
      ));
      laboratory.forEach( (item, index) => {
        if(index === elementIndex){
          item.status = 'active';
          setCenterImage(item.imagedate.data.attributes.url);
          setCenterContent(item.Content);
        } else {
          item.status = '';
        }
      });
		setServices(laboratory);
	} , [laboratoriesArray]);

  const handleChange = (key) => {
    let service = [];
		servicesImages.map( element => (
			service.push(element)
    ));
		service.forEach( (item, index) => {
			if(index === key){
				item.status = 'active';
        setCenterImage(item.imagedate.data.attributes.url);
        setCenterContent(item.Content);
			} else {
				item.status = '';
			}
		});
		
		setServices(service);
  }


  return (
    <React.Fragment>
      <div className="container">
        <div className="xl:grid xl:grid-cols-12 mb-[160px]">
          <nav className="xl:col-span-4 pt-[20px] lg:pt-[80px]">
            <ul className="text-black-light xl:text-base text-sm font-bold xl:text-left xl:ml-14 ml-5 flex overflow-x-hidden justify-between content-center xl:flex-col xl:w-3/4">
                        {
													(servicesImages.length) ? 
													servicesImages.map( (elmt,index) => {
														return(
                            <li onClick={() => handleChange(index)} className={`${elmt.status === 'active' ? 'text-red bg-white ' : '' } hover:text-red cursor-pointer rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 mr-3 border border-solid border-2 whitespace-nowrap flex items-center`} key={index}>
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
                   { (servicesImages.length) ? centerContent : "" }
                </ReactMarkdown>
              </div>
              <div className="md:col-span-6 md:ml-5 p-[15px] object-center">
              { (servicesImages.length && centerImage !== "") ? <img src={`${IMGURL}${centerImage}`} alt="" className="lg:max-w-full" /> : "" }
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

export { Laboratory }
