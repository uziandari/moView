import React, { Component } from 'react';

//import styles
import '../styles/searchbar.css';

export default class SearchBar extends Component {
  //search function to call action

  componentDidMount(){
    this.textInput.focus();
  }

  onInputChange(searchTerm) {
    this.props.searchMovies(searchTerm);
  }

  render() {
    return (
      <section className="search-container">
        <input className="search-input" type="text" ref={(input) => { this.textInput = input; }} placeholder="Search for a movie..." 
                onChange={event => this.onInputChange(event.target.value)} />
      </section>
    )
  }
}