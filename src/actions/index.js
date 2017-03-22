import request from 'superagent';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const FETCH_MOVIE = "FETCH_MOVIE";


const API_URL = 'http://www.omdbapi.com/?';

export function searchMovies(searchTerm = null) {
  
  return dispatch => {
    request.get(`${API_URL}s=${searchTerm}&y=&r=json&plot=short`)
            .end((err, res) => {
              if (err || !res.ok) {
                alert('Uh oh! Something went wrong...');
              } else {
                const moviesData = res.body.Search;
                dispatch(searchMoviesFulfilled(moviesData))
              }
            });
  }
}

function searchMoviesFulfilled(moviesData) {
  return {
    type: SEARCH_MOVIES,
    payload: moviesData
  }    
}
