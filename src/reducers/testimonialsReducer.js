import { types } from "../types/types";

const initialState = {
    testimonials: []
  }

export const testimonialsReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.testimonialsLoad:
          return {
            ...state,
            testimonials: [...action.payload]
          }
        
      
        default:
          return state;
      }

}