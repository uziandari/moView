import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import MoviesReducer from './movies'

const rootReducer = combineReducers({
  router: routerReducer,
  movies: MoviesReducer,
})

export default rootReducer;