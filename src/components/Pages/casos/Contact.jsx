import React from 'react'


import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRight,
	  faAngleUp,
  } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
  return (
    <React.Fragment>
        <section className="bg-gray mt-[50px]">
            <div className="container">
                <div className="row items-center justify-center text-center">
                    <div className="col-lg-7 py-[48px]">
                        <h4 className="text-[#ffffff] font-semibold text-[24px] leading-[32px] mb-[24px]">Si tiene alguna duda sobre algún servicio</h4>
                        <p className="text-[#ffffff] font-normal mb-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet convallis efficitur. Aenean et justo vitae mi pharetra iaculis a ac ante.</p>
                        <Link className="flex items-center justify-center" to="/contacto">
                            <span className="text-[#ffffff] text-[16px] font-semibold">Contáctenos</span>
                            <FontAwesomeIcon className="text-[#ffffff] ml-[7px]" icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-smoke h-16 w-16 lg:h-20 lg:w-20 rounded-full fixed flex items-center justify-center bottom-[20px] right-[20px] lg:bottom-[64px] lg:right-[64px] cursor-pointer">
            <FontAwesomeIcon className="text-red text-[24px]" icon={faAngleUp} />
        </section>
    </React.Fragment>
  )
}

export { Contact }