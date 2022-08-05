import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingLocations = ( ) => {

    return async ( dispatch ) => {
      const locations = await loadInformation('accordions');
      dispatch( setLocations( locations ) );
    }
  
}

export const setLocations = ( locations ) => {

    return {
      type: types.locationsLoad,
      payload: locations
    }
  };