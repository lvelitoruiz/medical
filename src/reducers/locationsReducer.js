import { types } from "../types/types";

const initialState = {
    locations: []
  }

export const locationsReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.locationsLoad:
          return {
            ...state,
            locations: [...action.payload]
          }
        
      
        default:
          return state;
      }

}