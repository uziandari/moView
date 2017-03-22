import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

//import search and list components
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';


class App extends Component {
  render() {
    return (
      <div>
        <SearchBar searchMovies={this.props.actions.searchMovies} />
        <MovieGrid movies={this.props.movies} />
      </div>
    );
  }
}

//pass returned movies from state
function mapStateToProps(state) {
  return {
    movies: state.movies.moviesData,
  }
}

//allow actions as props
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
