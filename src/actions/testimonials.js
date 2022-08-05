import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingTestimonials = ( ) => {

    return async ( dispatch ) => {
      const testimonials = await loadInformation('testimonials');
      dispatch( setTestimonials( testimonials ) );
    }
  
}

export const setTestimonials = ( testimonials ) => {

    return {
      type: types.testimonialsLoad,
      payload: testimonials
    }
  };