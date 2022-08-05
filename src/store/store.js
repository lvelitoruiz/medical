import { createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { aboutReducer } from '../reducers/aboutReducer';
import { advantagesReducer } from '../reducers/advantagesReducer';
import { bannersReducer } from '../reducers/bannersReducer';
import { casesReducer } from '../reducers/casesReducer';
import { catsReducer } from '../reducers/catsReducer';
import { diagnosticsReducer } from '../reducers/diagnosticsReducer';
import { laboratoriesReducer } from '../reducers/laboratoriesReducer';
import { locationsReducer } from '../reducers/locationsReducer';
import { staffReducer } from '../reducers/staffReducer';
import { testimonialsReducer } from '../reducers/testimonialsReducer';
import { valuesReducer } from '../reducers/valuesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  locations: locationsReducer,
  banners: bannersReducer,
  advantages: advantagesReducer,
  testimonials: testimonialsReducer,
  laboratories: laboratoriesReducer,
  diagnostics: diagnosticsReducer,
  values: valuesReducer,
  staff: staffReducer,
  about: aboutReducer,
  cases: casesReducer,
  cats: catsReducer
});

export const createStore = () => reduxCreateStore(
  reducers,
  composeEnhancers(
    applyMiddleware( thunk )
  )
);

export default createStore;