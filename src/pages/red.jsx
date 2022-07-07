import { Link } from "gatsby";
import React from "react"

import icon1 from "../assets/img/message.png";

const red = () => {
  return (
    <React.Fragment>
        <div className="bg-[#3C4C59] w-full h-screen bg-opacity-25 flex items-center justify-center">
          <div className="bg-[#ffffff] h-screen md:h-min p-[20px] lg:p-[50px] md:rounded-[20px] lg:w-[560px] overflow-auto text-center flex items-center flex-col justify-center">
            <img className="w-24 h-20 bg-cover object-cover mb-[10px]" src={icon1} alt="" />
            <h1 className="text-red text-[18px] lg:text-[24px] font-bold mb-[20px]">Mensaje enviado</h1>
            <p className="mb-[20px]">Muchas gracias por contactarnos, en breve un miembro de nuestro equipo se pondrá en contacto con usted.</p>
            <p>Si desea comunicarse en este instante, recuerde que puede llamarnos al (01) 680-2500.</p>
            <Link className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full mt-[30px]" to="/ingreso">Aceptar</Link>
          </div>
        </div>
    </React.Fragment>
  )
}

export default red ;