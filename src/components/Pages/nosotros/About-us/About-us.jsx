import React from 'react'

import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { IMGURL } from '../../../../consts/constants';
import { startLoadingAbout } from '../../../../actions/about';

export const AboutUs = () => {

    const dispatch = useDispatch();

	useEffect( () => {
	
		dispatch( startLoadingAbout( ) );

	}, [dispatch]);

    const [ info, setInfo ] = useState([]);

	const {about} = useSelector( state => state.about);

	useEffect(() => {
		let info = [];
		about.map( item => (
			info.push(item.attributes)
        ));
		setInfo(info);
	} , [about]);

  return (
    <React.Fragment>
        <section className='py-[40px] lg:py-[90px]'>
            <div className='container'>
                <div className='row justify-center'>
                    <div className='col-lg-11'>
                                {
									(info.length) ? info.slice(0,1).map( (element,index) => {
										return(
											<div className='row items-center justify-between mb-[60px]' key={index}>
                                                <div className='col-md-6'>
                                                    <div className='mb-[20px] lg:mb-0'>
                                                        <img src={`${IMGURL}${element.imagedate.data.attributes.url}`} alt="" />
                                                    </div>    
                                                </div>
                                                <div className='col-md-6 col-lg-5'>
                                                    <div>
                                                        <h1 className='text-red mb-[20px] font-bold text-2xl'>{element.title}</h1>
                                                        <p className='text-black-dark text-base font-normal'>{element.text}</p>
                                                    </div>    
                                                </div>
                                            </div>
										)
									}) : ""
								}
                                {
									(info.length) ? 
											<div className='row items-center justify-between flex-col-reverse md:flex-row'>
                                                <div className='col-md-6 col-lg-5'>
                                                    <div>
                                                        <h1 className='text-red mb-[20px] font-bold text-2xl'>{info[1].title}</h1>
                                                        <p className='text-black-dark text-base font-normal'>{info[1].text}</p>
                                                    </div>    
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='mb-[20px] lg:mb-0'>
                                                        <img src={`${IMGURL}${info[1].imagedate.data.attributes.url}`} alt="" />
                                                    </div>    
                                                </div>
                                            </div> : ""
								}
                    </div>  
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
