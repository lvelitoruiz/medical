import { types } from "../types/types";

const initialState = {
    staff: []
  }

export const staffReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.staffLoad:
          return {
            ...state,
            staff: [...action.payload]
          }
        
      
        default:
          return state;
      }

}