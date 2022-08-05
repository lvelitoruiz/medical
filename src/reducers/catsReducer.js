import { types } from "../types/types";

const initialState = {
    cats: []
  }

export const catsReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.categoryCasesLoad:
          return {
            ...state,
            cats: [...action.payload]
          }
        
      
        default:
          return state;
      }

}