import React, { Component } from 'react';


export default class MovieGrid extends Component {
  render() {
    console.log(this.props.movies)
    if (this.props.movies) {
      var moviesNode = this.props.movies.map((movie, index) => {
        return (
          <tr key={index}>
            <td >{movie.Title}</td>
          </tr>
        );
      });
    } else {
      return (
        <div>Nothing Found</div>
      );
    } 

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {moviesNode.length === 0 ? null : moviesNode}
        </tbody>
      </table>
    );
  }

}