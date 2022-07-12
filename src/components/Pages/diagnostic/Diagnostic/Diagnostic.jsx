import React from "react"

// //components
import { Link } from "gatsby"
import maxilofacial from "../../../../assets/img/maxilofacial.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons"

const Diagnostic = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="xl:grid xl:grid-cols-12 mb-[160px]">
          <nav className="xl:col-span-4 xl:py-[30px]">
            <div className=" border-2 border-smoke py-5 px-[25px] lg:px-[75px]">
              <h3 className="text-gray text-2xl font-bold mb-[10px]">Especialidades</h3>
            </div>
            <ul className="text-black-light xl:text-base text-sm font-bold xl:text-left xl:ml-14 ml-5 flex overflow-x-scroll justify-between content-center xl:flex-col xl:w-3/4">
              <li className="text-red bg-white cursor-pointer rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 mr-3 border border-solid border-2 whitespace-nowrap flex items-center">
                <Link to="">Cirugía Maxilofacial</Link>
                <FontAwesomeIcon
                  className="text-red text-[18px] ml-3 w-[18px]"
                  icon={faArrowRight}
                />
              </li>
              <li className="hover:text-red hover:border hover:border-solid hover:border-2 border-2 border-solid border-white hover:border-red hover:cursor-pointer hover:bg-white duration-300 rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 whitespace-nowrap">
                <Link to="">Endodoncia</Link>
              </li>
              <li className="hover:text-red hover:border hover:border-solid hover:border-2 border-2 border-solid border-white hover:border-red hover:cursor-pointer hover:bg-white duration-300 rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 whitespace-nowrap">
                <Link to="">Implantología</Link>
              </li>
              <li className="hover:text-red hover:border hover:border-solid hover:border-2 border-2 border-solid border-white hover:border-red hover:cursor-pointer hover:bg-white duration-300 rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 whitespace-nowrap">
                <Link to="">Odontología Preventiva</Link>
              </li>
              <li className="hover:text-red hover:border hover:border-solid hover:border-2 border-2 border-solid border-white hover:border-red hover:cursor-pointer hover:bg-white duration-300 rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 whitespace-nowrap">
                <Link to="">Odontopediatría</Link>
              </li>
              <li className="hover:text-red hover:border hover:border-solid hover:border-2 border-2 border-solid border-white hover:border-red hover:cursor-pointer hover:bg-white duration-300 rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 whitespace-nowrap">
                <Link to="">Ortodoncia</Link>
              </li>
              <li className="hover:text-red hover:border hover:border-solid hover:border-2 border-2 border-solid border-white hover:border-red hover:cursor-pointer hover:bg-white duration-300 rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 whitespace-nowrap">
                <Link to="">Periodoncia</Link>
              </li>
              <li className="hover:text-red hover:border hover:border-solid hover:border-2 border-2 border-solid border-white hover:border-red hover:cursor-pointer hover:bg-white duration-300 rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 whitespace-nowrap">
                <Link to="">Rehabilitación Oral</Link>
              </li>
            </ul>
          </nav>
          <section className="col-span-8 pt-[20px] lg:pt-[80px]">
            <div className="md:grid md:grid-cols-12 p-5 lg:p-10 bg-smoke rounded-[24px] gap-6">
              <div className="md:col-span-6 mb-16 pr-4">
                <div className="mb-[40px]">
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
                </div>
              </div>
              <div className="md:col-span-6 object-center">
                <img src={maxilofacial} alt="" className="lg:max-w-full" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

export { Diagnostic }
