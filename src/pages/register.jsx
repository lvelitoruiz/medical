import React from "react"

import icon1 from "../assets/img/redodontologos@3x.png";

const Register = () => {
  return (
    <React.Fragment>
      <div className="bg-[#3C4C59] w-full h-screen bg-opacity-25 flex items-center justify-center">
        <div className="bg-smoke h-screen md:h-min p-[20px] lg:p-[50px] md:rounded-[20px] lg:w-[700px] relative overflow-auto">
          <div className="flex items-center">
            <div className="w-14 lg:w-24 h-14 lg:h-24 min-w-[3.5rem] lg:min-w-[6rem] bg-[#ffffff] rounded-[14px] lg:rounded-[24px] mr-[30px] flex items-center justify-center">
              <img className="w-10 lg:w-20 h-10 lg:h-20 bg-cover object-cover" src={icon1} alt="" />
            </div>
            <h2 className="font-semibold text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px]">
              Únete a nuestra red de odontólogos
            </h2>	
          </div>
          <form action="" className="form mt-[60px]">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">Nombre</p>
                  <input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Escriba aquí" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">Apellidos</p>
                  <input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Escriba aquí" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">Fecha de nacimiento</p>
                  <input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="date" placeholder="Escriba aquí" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">DNI</p>
                  <input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="87654321" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">Correo electrónico</p>
                  <input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="email" placeholder="micorreo@gmail.com" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">Celular</p>
                  <input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="number" placeholder="945910122" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">Dirección</p>
                  <input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Jr. Crocane 420" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">Especialidad</p>
                  <select className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff]">
                    <option value="">Seleccionar</option>
                    <option value="">Selecciona</option>
                    <option value="">Selecciona</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">Sedes de preferencia</p>
                  <select className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff]">
                    <option value="">Selecciona la sede</option>
                    <option value="">Selecciona</option>
                    <option value="">Selecciona</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-[20px]">
                  <p className="font-normal pb-[8px] pl-[16px]">Cop</p>
                  <input className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="email" placeholder="9895" />
                </div>
              </div>
            </div>
            <div className="row mt-[40px] justify-center">
              <div className="col-md-4">
                <button className="text-[#ffffff] rounded-full w-full p-[6px] bg-red font-semibold text-[16px]" type="submit">
                  Afiliarme
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Register;