import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingCases = ( ) => {

    return async ( dispatch ) => {
      const cases = await loadInformation('caso-clinicos');
      dispatch( setCases( cases ) );
    }
  
}

export const setCases = ( cases ) => {

    return {
      type: types.casesLoad,
      payload: cases
    }
  };