import React from 'react'

import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRight
  } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { IMGURL } from '../../../consts/constants';

import { useDispatch } from 'react-redux';
import { startLoadingCases } from '../../../actions/cases';
import { startLoadingCats } from '../../../actions/cats';
import { startLoadingBanners } from '../../../actions/banners';
import { paginateInformation } from '../../../helpers/paginateInformation';
import { categorieInformation } from '../../../helpers/categorieInformation';


const Casos = () => {

	const dispatch = useDispatch();

	useEffect( () => {
		
		dispatch( startLoadingBanners( ) );
		dispatch( startLoadingCases( ) );
		dispatch( startLoadingCats( ) );

	}, [dispatch]);

	const [ info, setInfo ] = useState([]);
	const [ categories, setCategories ] = useState([]);
	const [ size,setSize ] = useState(3);
	const [ page,setPage ] = useState(1);
	const [ word,setWord ] = useState("");
	const [ cat,setCat ] = useState("");
	const [ moreItems,setMoreItems ] = useState(false);

	// const {cases} = useSelector( state => state.cases);
	const {cats} = useSelector( state => state.cats);

	const [totalItems,setTotalItems] = useState(0);

	const [items,setCaseItems] = useState([]);

	useEffect(() => {
		let info = [];
		cats.map( caso => (
			info.push(caso.attributes)
		));
		setCategories(info);
		pagination();
	} , [cats]);

	const filterCats = (event) => {
		let cat = event.target.value;
		updateCat(cat);
	}

	useEffect( () => {
		pagination();
	},[page])

	useEffect( () => {
		const delayDebounceFn = setTimeout(() => {
			pagination();
		}, 500)
	  
		return () => clearTimeout(delayDebounceFn)
	}, [word])

	useEffect( () => {
		const delayDebounceFn = setTimeout(() => {
			categoriesSearch();
		}, 50)
	  
		return () => clearTimeout(delayDebounceFn)
	}, [cat])

	useEffect( () => {
		console.log('**** these are the items ***',totalItems);
		if(totalItems >= 1) {
			const replaceItems = [];
			for( let i = 0; i < totalItems; i++) {
				replaceItems.push({number: i + 1, status: 'text-red'});
			}
			console.log(page);
			replaceItems[page - 1].status = 'text-black-light';
			setCaseItems(replaceItems);
		}
	},[totalItems])

	const updatePage = (index) => {
		console.log('****** set page');
		setPage(index + 1);
	}

	const updateWord = (param) => {
		setPage(1);
		setWord(param);
	}

	const updateCat = (param) => {
		setPage(1);
		setCat(param);
	}

	const pagination = async () => {
		const pages = await paginateInformation('caso-clinicos',page,size,word);
		const elements = [];
		const responseLocations = pages.data;
        responseLocations.forEach(element => {
            elements.push(element.attributes);
        });
		console.log(elements,'**** elemento');
		setInfo(elements);
		setTotalItems(pages.meta.pagination.pageCount);
		statusChange();
	}

	const categoriesSearch = async () => {
		const pages = await categorieInformation('caso-clinicos',page,size,cat);
		const elements = [];
		const responseLocations = pages.data;
        responseLocations.forEach(element => {
            elements.push(element.attributes);
        });
		console.log(elements,'**** elemento');
		setInfo(elements);
		setTotalItems(pages.meta.pagination.pageCount);
		statusChange();
	}

	const statusChange = () => {
		if(totalItems >= 1) {
			const replaceItems = [];
			for( let i = 0; i < totalItems; i++) {
				replaceItems.push({number: i + 1, status: 'text-red'});
			}
			console.log(page);
			replaceItems[page - 1].status = 'text-black-light';
			setCaseItems(replaceItems);
		}
	}

	const handleChange = (event) => {
		updateWord(event.target.value);
	}


    return (
      <React.Fragment>
        <section className="container">
			<div className="row mt-[40px] mb-[10px] items-center">
				<div className="col-12 col-md-6 mb-[15px] md:mb-0">
					<p className="text-[#B0BEC5] text-[16px]">{info.length} Casos clínicos</p>
					<div className='bg-smoke rounded-3xl p-4 mt-3'>
						<input onChange={handleChange} name="search" value={word} className="py-[8px] px-[16px] rounded-full w-full bg-[#ffffff] placeholder:text-gray placeholder:font-normal" type="text" placeholder="Buscar aquí" />
					</div>
				</div>
				<div className="col-12 col-md-6">
					<div className="row items-center md:justify-end">
						<div className="col-auto pr-0">
							<p className="text-[#B0BEC5] text-[16px] font-semibold">Categoría:</p>
						</div>
						<div className="col-8 col-lg-5">
							<select onChange={filterCats} className="bg-smoke py-[8px] text-[16px] leading-[24px] w-full px-[14px] rounded-full" name="" id="">
								<option value="">Todos</option>
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
						{/* <div className="col-auto">
							{
								(moreItems) ? <button onClick={() => loadMore()} className="border border-solid border-red text-red text-[16px] font-semibold py-2 px-6 rounded-full">Ver más casos</button> : ""
							}
						</div> */}
						<div>
							{/* <span className='text-red font-semibold text-2xl px-4 hover:text-black-light cursor-pointer'>&#171;</span> */}
							{
								items.map( (item,index) => {
									return <span onClick={ () => updatePage(index)} className={`${item.status} font-semibold text-xl px-4 hover:text-black-light cursor-pointer`} key={index}>{item.number}</span>
								})
							}
							{/* <span className='text-red font-semibold text-2xl px-4 hover:text-black-light cursor-pointer'>&#187;</span> */}
						</div>
					</div>
				</div>
			</div>
		</section>
      </React.Fragment>
    )
}

export { Casos }