import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingBanners = ( ) => {

    return async ( dispatch ) => {
      const banners = await loadInformation('banners');
      dispatch( setBanners( banners ) );
    }
  
}

export const setBanners = ( banners ) => {

    return {
      type: types.bannersLoad,
      payload: banners
    }
  };