import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//example single component using setState (no redux)

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movie: null
    }
    
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
    if (!movie) {
      return <div>
        <h2>Loading...</h2>
      </div>
    }
    
    return (
      <div className="movie-detail">
        <div className="row">
          <div className="col-md-4">
            <img src={movie.Poster} className="thumbnail" />
          </div>
          <div className="col-md-8">
            <h2>{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item"><strong>Genre:</strong> {movie.Genre}</li>
              <li className="list-group-item"><strong>Released:</strong> {movie.Released}</li>
              <li className="list-group-item"><strong>Rated:</strong> {movie.Rated}</li>
              <li className="list-group-item"><strong>IMDB Rating:</strong> {movie.imdbRating}</li>
              <li className="list-group-item"><strong>Director:</strong> {movie.Director}</li>
              <li className="list-group-item"><strong>Writer:</strong> {movie.Writer}</li>
              <li className="list-group-item"><strong>Actors:</strong> {movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="well">
            <h3>Plot</h3>
            {movie.Plot}
            <hr />
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" className="btn btn-primary">View IMDB</a>
            <Link to={'/'} className="btn btn-default">Back To Search</Link>
          </div>
        </div>
      </div>
    );
  }
}
