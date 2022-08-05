import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingValues = ( ) => {

    return async ( dispatch ) => {
      const values = await loadInformation('value-items');
      dispatch( setValues( values ) );
    }
  
}

export const setValues = ( values ) => {

    return {
      type: types.valuesLoad,
      payload: values
    }
  };