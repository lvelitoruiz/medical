import { types } from "../types/types";

const initialState = {
    cases: []
  }

export const casesReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.casesLoad:
          return {
            ...state,
            cases: [...action.payload]
          }
        
      
        default:
          return state;
      }

}