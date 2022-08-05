import { types } from "../types/types";

const initialState = {
    diagnostics: []
  }

export const diagnosticsReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.diagnosticsLoad:
          return {
            ...state,
            diagnostics: [...action.payload]
          }
        
      
        default:
          return state;
      }

}