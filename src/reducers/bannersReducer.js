import { types } from "../types/types";

const initialState = {
    banners: []
  }

export const bannersReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.bannersLoad:
          return {
            ...state,
            banners: [...action.payload]
          }
        
      
        default:
          return state;
      }

}