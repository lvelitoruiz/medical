import { types } from "../types/types";

const initialState = {
    laboratories: []
  }

export const laboratoriesReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.laboratoriesLoad:
          return {
            ...state,
            laboratories: [...action.payload]
          }
        
      
        default:
          return state;
      }

}