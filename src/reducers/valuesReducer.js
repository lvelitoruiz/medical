import { types } from "../types/types";

const initialState = {
    values: []
  }

export const valuesReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.valuesLoad:
          return {
            ...state,
            values: [...action.payload]
          }
        
      
        default:
          return state;
      }

}