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
              <img src={movie.Poster === "N/A" ? "https://placehold.it/360x240" : movie.Poster} alt={movie.Title} /> {/* Placeholder image for title that lack poster images --would likely have custom image in production */}
            </div>
            <div className="card-content">
              <h2 className="card-title"><strong>{movie.Title}</strong> ({movie.Year})</h2>
            </div>
            <Link to={`/view/${movie.imdbID}`}>View More</Link> {/* Link to MovieDetail component */}
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
        {moviesNode} {/* Can use terinary to check moviesNode.length || !== rather than if/else in declaration*/}
      </section>
    );
  }

}
