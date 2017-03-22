import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import style
import '../styles/movieGrid.css';


export default class MovieGrid extends Component {


  render() {
    if (this.props.movies) { //checks if api request returns undefined; search returns no results
      var moviesNode = this.props.movies.map((movie, index) => {
        return (
            <div key={index} className="movie-card">
              <div className="movie-image">
                <div className="image-overlay">
                </div>
                <img src={movie.Poster} alt={movie.Title} />
                </div>
              <div className="card-content">
                <div className="card-year">({movie.Year})</div>
                <div className="card-title">{movie.Title}</div>
                <Link to={`/view/${movie.imdbID}`}>View Details</Link>
              </div>
            </div>
        );
      });
    } else {
      return (
        <div></div>
      );
    } 

    return (
      <section className="results-container">
        {moviesNode.length === 0 ? null : moviesNode}
      </section>
    );
  }

}


