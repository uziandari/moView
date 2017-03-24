import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//single component using fetch, setState (no redux)

//import style
import '../styles/movieDetail.css';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      movie: null
    }
    
    //api call
    fetch(`http://omdbapi.com/?i=${this.props.match.params.imdbID}`)
    .then(response => {
      console.log("got response:", response);
      response.json().then(data => {
        this.setState({movie: data});
      });
    }).catch(error => {
      console.log("error");
      this.setState({movie: null});
    });
  }

  render() {
    const movie = this.state.movie;
    if (!movie) { //loaded until response
      return <div className="loading">
        <h2>Loading...</h2>
      </div>
    }
    
    return (
      <div className="detail-wrapper">
        <div className="movie-detail">
          <div className="detail-card">
            <div className="movie-poster">
                <img src={movie.Poster === "N/A" ? "https://placehold.it/240x360" : movie.Poster} alt={movie.Title} /> {/* Placeholder image for title that lack poster images --would likely have custom image in production */}
            </div>
            <div className="movie-content">
              <h2>{movie.Title}</h2>
              <h3>Summary</h3>
              <p>{movie.Plot}</p>
              <ul className="list-group">
                <li className="list-item"><strong>Genre:</strong> {movie.Genre}</li>
                <li className="list-item"><strong>Rated:</strong> {movie.Rated}</li>
                <li className="list-item"><strong>Director:</strong> {movie.Director}</li>
                <li className="list-item"><strong>Writer:</strong> {movie.Writer}</li>
                <li className="list-item"><strong>Actors:</strong> {movie.Actors}</li>
                <li className="list-item"><strong>IMDB Rating:</strong> {movie.imdbRating}</li>
                <li className="list-item"><strong>Released:</strong> {movie.Released}</li>
              </ul>
              <hr />
              <div className="movie-links">
                <Link to={`http://imdb.com/title/${movie.imdbID}`} target="_blank" className="outside-link">View on IMDB</Link>
                <Link to={'/'} className="btn btn-default">Back To Search</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
