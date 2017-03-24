import request from 'superagent';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const FETCH_MOVIE = "FETCH_MOVIE"; //may break into file on larger project


const API_URL = 'http://www.omdbapi.com/?'; //assign omdbAPI

export function searchMovies(searchTerm = null) {
  
  return dispatch => {
    request.get(`${API_URL}s=${searchTerm.trimRight()}&y=&r=json&plot=short`) //Top 10 results only --APPI 'page' can be used here if provided in another variable/action
            .end((err, res) => {
              if (err || !res.ok) {
                alert('Uh oh! Something went wrong...');
              } else {
                const moviesData = res.body.Search; //returns omdb object
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
