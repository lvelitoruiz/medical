import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingAbout = ( ) => {

    return async ( dispatch ) => {
      const about = await loadInformation('about-value-items');
      dispatch( setAbout( about ) );
    }
  
}

export const setAbout = ( about ) => {

    return {
      type: types.aboutLoad,
      payload: about
    }
  };