import { loadInformation } from "../helpers/loadInformation";
import { types } from "../types/types";

export const startLoadingDiagnostics = ( ) => {

    return async ( dispatch ) => {
      const diagnostics = await loadInformation('diagnostics');
      dispatch( setDiagnostics( diagnostics ) );
    }
  
}

export const setDiagnostics = ( diagnostics ) => {

    return {
      type: types.diagnosticsLoad,
      payload: diagnostics
    }
  };