import React from 'react'

import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import item1 from "../../../assets/img/casos-clinicos1.png";
import {
	faArrowRight
  } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { IMGURL } from '../../../consts/constants';

const Casos = () => {

	const [ info, setInfo ] = useState([]);
	const [ categories, setCategories ] = useState([]);
	const [ size,setSize ] = useState(2);
	const [ moreItems,setMoreItems ] = useState(false);

	const {cases} = useSelector( state => state.cases);
	const {cats} = useSelector( state => state.cats);

	useEffect(() => {
		let info = [];
		cases.map( caso => {
			info.push(caso.attributes)
		});
		if(cases.length > size) {
			setMoreItems(true);
		}
		setInfo(info);
	} , [cases]);

	useEffect(() => {
		let info = [];
		cats.map( caso => {
			info.push(caso.attributes)
		});
		setCategories(info);
	} , [cats]);

	const loadMore = () => {
		setSize(size + 2)
	}

	useEffect( () => {
		if(size >= cases.length) {
			setMoreItems(false);
		}
	}, [size])

	const filterCats = (event) => {
		let cat = event.target.value;
		setSize(2);
		if(cat == "todos"){
			let info = [];
			cases.map( caso => {
				info.push(caso.attributes)
			});
			setInfo(info);
			if(info.length > size) {
				setMoreItems(true);
			} else {
				setMoreItems(false)
			}
		} else {
			let info = [];
			cases.map( caso => {
				if( cat == caso.attributes.cases.data[0].attributes.name){
					info.push(caso.attributes)
				}
			});
			setInfo(info);
			if(info.length > size) {
				setMoreItems(true);
			} else {
				setMoreItems(false)
			}
		}
	}


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
							<select onChange={filterCats} className="bg-smoke py-[8px] text-[16px] leading-[24px] w-full px-[14px] rounded-full" name="" id="">
								<option value="todos">Todos</option>
								{
									(categories.length) ? categories.map( (element,index) => {
										return(
											<option key={index} value={element.name}>{element.name}</option>
										)
									}): ""
								}
							</select>
							</div>
					</div>
				</div>
			</div>
			<div className="row justify-center">
				<div className="col-lg-7">
								{
									(info.length) ? 
										info.slice(0,size).map( (element,index) => {
											return (
												<div className="row items-center py-[39px] border-b border-solid border-smoke" key={index}>
													<div className="col-md-6">
														<img className="w-full h-72 rounded-lg mb-[20px] md:mb-0 object-cover" src={`${IMGURL}${element.image.data.attributes.url}`} alt="" />
													</div>
													<div className="col-md-6">
														<div>
															<p className="text-[#B0BEC5] text-[16px] mb-[16px]">{element.cases.data[0].attributes.name}</p>
															<h3 className="text-red text-[24px] font-semibold leading-[30px] mb-[16px]">{element.title}</h3>
															<p className="text-[16px] leading-[24px] mb-[30px]">{element.extract}</p>
															<Link className="flex items-center"
																to={`/caso/${element.slug}`}
																state={{getElement: index}}>
																<span className="text-black text-[16px] font-semibold">Ver más</span>
																<FontAwesomeIcon className="text-black ml-[7px]" icon={faArrowRight} />
															</Link>
														</div>
													</div>
												</div>
											)
										}) : ''
								}
					
					
					

				
					
					<div className="row justify-center my-[40px]">
						<div className="col-auto">
							{
								(moreItems) ? <button onClick={() => loadMore()} className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full">Ver más casos</button> : ""
							}
						</div>
					</div>
				</div>
			</div>
		</section>
      </React.Fragment>
    )
}

export { Casos }