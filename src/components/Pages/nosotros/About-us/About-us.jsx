import React from 'react'

import mision from "../../../../assets/img/mision@3x.png";
import vision from "../../../../assets/img/vision@3x.png";

export const AboutUs = () => {
  return (
    <React.Fragment>
        <section className='py-[40px] lg:py-[90px]'>
            <div className='container'>
                <div className='row justify-center'>
                    <div className='col-lg-11'>
                        <div className='row items-center justify-between mb-[60px]'>
                            <div className='col-md-6'>
                                <div className='mb-[20px] lg:mb-0'>
                                    <img src={mision} alt="" />
                                </div>    
                            </div>
                            <div className='col-md-6 col-lg-5'>
                                <div>
                                    <h1 className='text-red mb-[20px] font-bold text-2xl'>Misión</h1>
                                    <p className='text-black-dark text-base font-normal'>Brindar un servicio de salud odontológico integral, eficiente y oportuno contribuyendo enmejorar la calidad de vida de nuestros pacientes en el Perú.</p>
                                </div>    
                            </div>
                        </div>
                        <div className='row items-center justify-between flex-col-reverse md:flex-row'>
                            <div className='col-md-6 col-lg-5'>
                                <div>
                                    <h1 className='text-red mb-[20px] font-bold text-2xl'>Visión</h1>
                                    <p className='text-black-dark text-base font-normal'>A través de nuestra pasión por la vocación de servicio, equipos de última tecnología y profesionales capacitados, queremos brindar servicios de salud integral de calidad a todos los peruanos.</p>
                                </div>    
                            </div>
                            <div className='col-md-6'>
                                <div className='mb-[20px] lg:mb-0'>
                                    <img src={vision} alt="" />
                                </div>    
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
