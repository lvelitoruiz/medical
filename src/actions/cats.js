import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingCats = ( ) => {

    return async ( dispatch ) => {
      const cats = await loadInformation('cases');
      dispatch( setCats( cats ) );
    }
  
}

export const setCats = ( cats ) => {

    return {
      type: types.categoryCasesLoad,
      payload: cats
    }
  };