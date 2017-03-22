import { SEARCH_MOVIES } from '../actions';

const initialState =  {
  moviesData: []
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state, moviesData: action.payload
      };
    default:
      return state;
  }
}