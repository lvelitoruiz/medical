import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingAdvantages = ( ) => {

    return async ( dispatch ) => {
      const advantages = await loadInformation('advantage-items');
      dispatch( setAdvantages( advantages ) );
    }
  
}

export const setAdvantages = ( advantages ) => {

    return {
      type: types.advantagesLoad,
      payload: advantages
    }
  };