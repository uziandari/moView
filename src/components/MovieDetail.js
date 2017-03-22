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
      <div>
        <h2>({movie.Year}) {movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title}/>
        <p>
          {movie.Plot}
        </p>
        <Link to={'/'}>Go Back</Link>
      </div>
    );
  }
}
