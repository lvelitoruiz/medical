import React from 'react'

import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import item1 from "../../../assets/img/casos-clinicos1.png";
import {
	faArrowRight
  } from '@fortawesome/free-solid-svg-icons'

const Casos = () => {
    return (
      <React.Fragment>
        <section className="container">
			<div className="row mt-[40px] mb-[10px] items-center">
				<div className="col-12 col-md-6 mb-[15px] md:mb-0">
					<p className="text-[#B0BEC5] text-[16px]">15 Casos clínicos</p>
				</div>
				<div className="col-12 col-md-6">
					<div className="row items-center md:justify-end">
						<div className="col-auto pr-0">
							<p className="text-[#B0BEC5] text-[16px] font-semibold">Categoría:</p>
						</div>
						<div className="col-8 col-lg-5">
							<select className="bg-smoke py-[8px] text-[16px] leading-[24px] w-full px-[14px] rounded-full" name="" id="">
								<option value="">Todos</option>
								<option value="">Todos</option>
								<option value="">Todos</option>
							</select>
							</div>
					</div>
				</div>
			</div>
			<div className="row justify-center">
				<div className="col-lg-7">
					<div className="row items-center py-[39px] border-b border-solid border-smoke">
						<div className="col-md-6">
							<img className="w-full h-72 rounded-lg mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
						</div>
						<div className="col-md-6">
							<div>
								<p className="text-[#B0BEC5] text-[16px] mb-[16px]">Categoría 1</p>
								<h3 className="text-red text-[24px] font-semibold leading-[30px] mb-[16px]">Planificación para implantes con tomografía odontológica</h3>
								<p className="text-[16px] leading-[24px] mb-[30px]">Paciente de 45 años de sexo masculino acude al servicio para evaluación con tomografía odontológica…</p>
								<Link className="flex items-center" to="/caso">
									<span className="text-black text-[16px] font-semibold">Ver más</span>
									<FontAwesomeIcon className="text-black ml-[7px]" icon={faArrowRight} />
								</Link>
							</div>
						</div>
					</div>
					<div className="row items-center py-[39px] border-b border-solid border-smoke">
						<div className="col-md-6">
							<img className="w-full h-72 rounded-lg mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
						</div>
						<div className="col-md-6">
							<div>
								<p className="text-[#B0BEC5] text-[16px] mb-[16px]">Categoría 2</p>
								<h3 className="text-red text-[24px] font-semibold leading-[30px] mb-[16px]">Amelogénesis Imperfecta</h3>
								<p className="text-[16px] leading-[24px] mb-[30px]">La Amelogénesis imperfecta (AI), es una anomalía dentaria que se encuentra ligada al cromosoma X...</p>
								<Link className="flex items-center" to="">
									<span className="text-black text-[16px] font-semibold">Ver más</span>
									<FontAwesomeIcon className="text-black ml-[7px]" icon={faArrowRight} />
								</Link>
							</div>
						</div>
					</div>
					<div className="row items-center py-[39px] border-b border-solid border-[#CFD8DC]">
						<div className="col-md-6">
							<img className="w-full h-72 rounded-lg mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
						</div>
						<div className="col-md-6">
							<div>
								<p className="text-[#B0BEC5] text-[16px] mb-[16px]">Categoría 3</p>
								<h3 className="text-red text-[24px] font-semibold leading-[30px] mb-[16px]">Odontomas</h3>
								<p className="text-[16px] leading-[24px] mb-[30px]">Los odontomas son Tumores benignos de origen hamartomatoso, de tejido odontogénico, que presentan diferentes estados</p>
								<Link className="flex items-center" to="">
									<span className="text-black text-[16px] font-semibold">Ver más</span>
									<FontAwesomeIcon className="text-black ml-[7px]" icon={faArrowRight} />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="col-lg-7">
					<div className="row items-center py-[39px] border-b border-solid border-smoke">
						<div className="col-md-6">
							<img className="w-full h-72 rounded-lg mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
						</div>
						<div className="col-md-6">
							<div>
								<p className="text-[#B0BEC5] text-[16px] mb-[16px]">Categoría 1</p>
								<h3 className="text-red text-[24px] font-semibold leading-[30px] mb-[16px]">Planificación para implantes con tomografía odontológica</h3>
								<p className="text-[16px] leading-[24px] mb-[30px]">Paciente de 45 años de sexo masculino acude al servicio para evaluación con tomografía odontológica…</p>
								<Link className="flex items-center" to="">
									<span className="text-black text-[16px] font-semibold">Ver más</span>
									<FontAwesomeIcon className="text-black ml-[7px]" icon={faArrowRight} />
								</Link>
							</div>
						</div>
					</div>
					<div className="row items-center py-[39px] border-b border-solid border-smoke">
						<div className="col-md-6">
							<img className="w-full h-72 rounded-lg mb-[20px] md:mb-0 object-cover" src={item1} alt="" />
						</div>
						<div className="col-md-6">
							<div>
								<p className="text-[#B0BEC5] text-[16px] mb-[16px]">Categoría 2</p>
								<h3 className="text-red text-[24px] font-semibold leading-[30px] mb-[16px]">Amelogénesis Imperfecta</h3>
								<p className="text-[16px] leading-[24px] mb-[30px]">La Amelogénesis imperfecta (AI), es una anomalía dentaria que se encuentra ligada al cromosoma X...</p>
								<Link className="flex items-center" to="">
									<span className="text-black text-[16px] font-semibold">Ver más</span>
									<FontAwesomeIcon className="text-black ml-[7px]" icon={faArrowRight} />
								</Link>
							</div>
						</div>
					</div>
					<div className="row justify-center my-[40px]">
						<div className="col-auto">
							<button className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full">Ver más casos</button>
						</div>
					</div>
				</div>
			</div>
		</section>
      </React.Fragment>
    )
}

export { Casos }