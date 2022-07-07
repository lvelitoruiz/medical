import React from "react"

// //components
import { Link } from "gatsby"
import sercons from "../../../../assets/img/SerCom.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const Laboratory = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="xl:grid xl:grid-cols-12 mb-[160px]">
          <nav className="xl:col-span-4 pt-[20px] lg:pt-[80px]">
            <ul className="text-black-light xl:text-base text-sm font-bold xl:text-left xl:ml-14 ml-5 flex overflow-x-scroll justify-between content-center xl:flex-col xl:w-3/4">
              <li className="text-red bg-white cursor-pointer rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 mr-3 border border-solid border-2 whitespace-nowrap">
                <Link to="">Servicio para Consultorio</Link>
              </li>
              <li className="hover:text-red hover:border hover:border-solid hover:border-2 border-2 border-solid border-white hover:border-red hover:cursor-pointer hover:bg-white duration-300 rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 whitespace-nowrap">
                <Link to="">Servicio para Laboratorio</Link>
              </li>
              <li className="hover:text-red hover:border hover:border-solid hover:border-2 border-2 border-solid border-white hover:border-red hover:cursor-pointer hover:bg-white duration-300 rounded-[40px] xl:p-5 lg:px-8 lg:py-4 px-4 py-4 xl:mb-4 mb-5 whitespace-nowrap">
                <Link to="">Sistema de Flujo Digital CAD CAM</Link>
              </li>
            </ul>
          </nav>
          <section className="col-span-8 pt-[20px] lg:pt-[80px]">
            <div className="md:grid md:grid-cols-12 p-5 lg:p-10 bg-smoke rounded-[24px] gap-6">
              <div className="md:col-span-6 mb-16 pr-4">
                <div className="mb-[40px]">
                  <h3 className="text-2xl font-bold mb-7">
                    Estructuras para Porcelana
                  </h3>
                  <p className="text-gray mb-4">En Zirconia</p>
                  <ul className="text-black md:text-base text-sm font-normal">
                    <li className="mb-3 ml-3 flex">
                      <FontAwesomeIcon
                        className="text-red text-xs mr-4 mt-1 w-[8px]"
                        icon={faCircle}
                      />
                      <p>
                        Cofia
                      </p>
                    </li>
                    <li className="mb-3 ml-3 flex">
                      <FontAwesomeIcon
                        className="text-red text-xs mr-4 mt-1 w-[8px]"
                        icon={faCircle}
                      />
                      <p>
                        Fuente
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-6 md:ml-5 p-[15px] object-center md:m-[auto]">
                <img src={sercons} alt="" className="lg:max-w-[384px]" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

export { Laboratory }
