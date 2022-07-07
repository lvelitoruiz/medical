import { Link } from "gatsby";
import React from "react"

import icon1 from "../assets/img/2.Staff@3x.png";

const Ingreso = () => {
  return (
    <React.Fragment>
      <div className="bg-[#3C4C59] w-full h-screen bg-opacity-25 flex items-center justify-center">
          <div className="bg-[#ffffff] h-screen md:h-min p-[20px] lg:p-[50px] md:rounded-[20px] lg:w-[560px] overflow-auto text-center flex items-center flex-col justify-center">
            <img className="w-44 h-40 bg-cover object-cover mb-[10px]" src={icon1} alt="" />
            <h1 className="text-red text-[24px] lg:text-[32px] font-bold mb-[20px]">¡Registro exitoso!</h1>
            <p className="mb-[20px]">Gracias por dejarnos tus datos, pronto nos contactaremos contigo vía correo electrónico.</p>
            <Link className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full mt-[30px]">Aceptar</Link>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Ingreso;