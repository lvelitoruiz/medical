import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingStaff = ( ) => {

    return async ( dispatch ) => {
      const staff = await loadInformation('crew-items');
      dispatch( setStaff( staff ) );
    }
  
}

export const setStaff = ( staff ) => {

    return {
      type: types.staffLoad,
      payload: staff
    }
  };