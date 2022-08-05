import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingLaboratories = ( ) => {

    return async ( dispatch ) => {
      const laboratories = await loadInformation('laboratories');
      dispatch( setLaboratories( laboratories ) );
    }
  
}

export const setLaboratories = ( laboratories ) => {

    return {
      type: types.laboratoriesLoad,
      payload: laboratories
    }
  };