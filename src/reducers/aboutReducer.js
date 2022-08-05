import { types } from "../types/types";

const initialState = {
    about: []
  }

export const aboutReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.aboutLoad:
          return {
            ...state,
            about: [...action.payload]
          }
        
      
        default:
          return state;
      }

}