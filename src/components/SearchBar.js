import React, { Component } from 'react';

export default class SearchBar extends Component {
  //search function to call action
  onInputChange(searchTerm) {
    this.props.searchMovies(searchTerm);
  }

  render() {
    return (
      <div>
        <input placeholder="Search for a movie..." onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }
}