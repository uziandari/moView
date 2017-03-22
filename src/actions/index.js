import request from 'superagent';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';


const API_URL = 'http://www.omdbapi.com/?';

export function searchMovies(searchTerm = null) {
  
  return dispatch => {
    request.get(`${API_URL}s=${searchTerm.trim()}&y=&r=json&plot=short`) //trim surrounding ' ' on search
            .end((err, res) => {
              if (err || !res.ok) {
                alert('Oh no! error');
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