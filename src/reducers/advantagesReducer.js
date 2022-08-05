import { types } from "../types/types";

const initialState = {
    advantages: []
  }

export const advantagesReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.advantagesLoad:
          return {
            ...state,
            advantages: [...action.payload]
          }
        
      
        default:
          return state;
      }

}