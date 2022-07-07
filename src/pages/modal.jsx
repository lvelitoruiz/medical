import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faBriefcase,
  faGraduationCap,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

const modal = () => {
  return (
    <React.Fragment>
        <div className="bg-[#3C4C59] w-full h-screen bg-opacity-25 flex items-center justify-center">
          <div className="bg-[#ffffff] h-screen md:h-min p-[20px] lg:p-[50px] md:rounded-[20px] lg:w-[900px] relative overflow-auto">
            <FontAwesomeIcon className="text-[30px] lg:text-[20px] absolute top-[15px] lg:top-[25px] right-[15px] lg:right-[25px] cursor-pointer" icon={faXmark} />
            <h1 className="text-red text-[22px] lg:text-[32px] font-bold mb-[10px]">Mensaje enviado</h1>
            <p className="text-gray text-[18px] lg:text-[24px]">Especialista en Radiología Oral y Maxilofacial</p>
            <div className="mt-[20px] lg:mt-[50px]">
              <div className="flex items-center mb-[10px]">
                <FontAwesomeIcon className="text-red mr-[10px]" icon={faBriefcase} />
                <p className="text-red font-semibold">Resumen profesional</p>
              </div>
              <p className="leading-[24px]">• Cirujano Dentista. Universidad San Luis Gonzaga de Ica</p>
              <p className="leading-[24px]">• Especialista en Radiología Oral y Maxilofacial. Universidad Peruana Cayetano Heredia</p>
              <p className="leading-[24px]">• Diplomado en Salud Pública y Comunitaria. Universidad San Luis Gonzaga de Ica.</p>
              <p className="leading-[24px]">• Maestría en Odontología. Universidad Nacional San Luis Gonzaga de Ica.</p>
            </div>
            <div className="mt-[20px] lg:mt-[50px]">
              <div className="flex items-center mb-[10px]">
                <FontAwesomeIcon className="text-red mr-[10px]" icon={faGraduationCap} />
                <p className="text-red font-semibold">Experiencia Laboral</p>
              </div>
              <p className="leading-[24px]">• Medical Dent Digital. Servicio de Radiología Oral y Maxilofacial (Actualmente)</p>
              <p className="leading-[24px]">• IMÁGENES. Servicio de Radiología Oral y Maxilofacial (2017)</p>
              <p className="leading-[24px]">• PANORAL 3D. Servicio de Radiología Oral y Maxilofacial (2016)</p>
              <p className="leading-[24px]">• Centro Odontológico San Pablo. Servicio de Radiología Oral y Maxilofacial (2016)</p>
              <p className="leading-[24px]">• Centro de Diagnósticos por Imágenes DxM. Servicio de Radiología Oral y Maxilofacial (2013-2014)</p>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default modal ;