import React, { useEffect, useState } from "react";

import { useDispatch } from 'react-redux';
import { startLoadingLocations } from '../../actions/locations';
import { startLoadingBanners } from "../../actions/banners";
import { startLoadingAdvantages } from "../../actions/advantages";
import { startLoadingTestimonials } from "../../actions/testimonials";
import { startLoadingLaboratories } from "../../actions/laboratories";
import { startLoadingDiagnostics } from "../../actions/diagnostics";
import { startLoadingValues } from "../../actions/values";
import { startLoadingStaff } from "../../actions/staff";
import { startLoadingAbout } from "../../actions/about";
import { startLoadingCases } from "../../actions/cases";

const Layout = () => {

    const dispatch = useDispatch();

	useEffect( () => {
		
		dispatch( startLoadingLocations( ) );
		dispatch( startLoadingBanners( ) );
		dispatch( startLoadingAdvantages( ) );
		dispatch( startLoadingTestimonials( ) );
		dispatch( startLoadingLaboratories( ) );
		dispatch( startLoadingDiagnostics( ) );
		dispatch( startLoadingValues( ) );
		dispatch( startLoadingStaff( ) );
		dispatch( startLoadingAbout( ) );
		dispatch( startLoadingCases( ) );

	}, [dispatch]);
    
}

export {Layout}