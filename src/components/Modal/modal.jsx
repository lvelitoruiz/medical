import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from "react-markdown";

import './modal.scss';

import {
	faBriefcase,
  faGraduationCap,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

const Modal = ({specialist,handleModal,doctorItem}) => {
  return (
    <React.Fragment>
        <div className="bg-[#0c0c0c] w-full h-screen bg-opacity-75 flex items-center justify-center fixed top-0 left-0 z-[9999]">
          <div className="bg-[#ffffff] h-screen md:h-min p-[20px] lg:p-[50px] md:rounded-[20px] lg:w-[900px] relative overflow-auto">
            <FontAwesomeIcon className="text-[30px] lg:text-[20px] absolute top-[15px] lg:top-[25px] right-[15px] lg:right-[25px] cursor-pointer" icon={faXmark} onClick={() => handleModal(false)} />
            <h1 className="text-red text-[22px] lg:text-[32px] font-bold mb-[10px]">{doctorItem.name}</h1>
            <p className="text-gray text-[18px] lg:text-[24px]">Especialista en Radiología Oral y Maxilofacial</p>
            <div className="mt-[20px] lg:mt-[50px]">
              <div className="flex items-center mb-[10px]">
                <FontAwesomeIcon className="text-red mr-[10px]" icon={faBriefcase} />
                <p className="text-red font-semibold">Resumen profesional</p>
              </div>
              <div className="markdown-content">
                <ReactMarkdown>
                  {doctorItem.resumen}
                </ReactMarkdown>
              </div>
              {/* <p className="leading-[24px]">• Cirujano Dentista. Universidad San Luis Gonzaga de Ica</p>
              <p className="leading-[24px]">• Especialista en Radiología Oral y Maxilofacial. Universidad Peruana Cayetano Heredia</p>
              <p className="leading-[24px]">• Diplomado en Salud Pública y Comunitaria. Universidad San Luis Gonzaga de Ica.</p>
              <p className="leading-[24px]">• Maestría en Odontología. Universidad Nacional San Luis Gonzaga de Ica.</p> */}
            </div>
            <div className="mt-[20px] lg:mt-[50px]">
              <div className="flex items-center mb-[10px]">
                <FontAwesomeIcon className="text-red mr-[10px]" icon={faGraduationCap} />
                <p className="text-red font-semibold">Experiencia Laboral</p>
              </div>
              <div className="markdown-content">
                <ReactMarkdown>
                  {doctorItem.experiencia}
                </ReactMarkdown>
              </div>
              {/* <p className="leading-[24px]">• Medical Dent Digital. Servicio de Radiología Oral y Maxilofacial (Actualmente)</p>
              <p className="leading-[24px]">• IMÁGENES. Servicio de Radiología Oral y Maxilofacial (2017)</p>
              <p className="leading-[24px]">• PANORAL 3D. Servicio de Radiología Oral y Maxilofacial (2016)</p>
              <p className="leading-[24px]">• Centro Odontológico San Pablo. Servicio de Radiología Oral y Maxilofacial (2016)</p>
              <p className="leading-[24px]">• Centro de Diagnósticos por Imágenes DxM. Servicio de Radiología Oral y Maxilofacial (2013-2014)</p> */}
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Modal ;