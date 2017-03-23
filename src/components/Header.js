import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

//import style
import '../styles/header.css';


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Movie <span>Info</span> Search</h1> {/*can Link if clearing search, return home*/}
      </div>
    );
  }

}
