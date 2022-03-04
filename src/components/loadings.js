import React, { Component } from 'react';
import Loadinggif from "../images/gif/loading-arrow.gif"

export default class Loadings extends Component {
  render() {
    return (
      <div className="loading">
        <h1>Room data Loading....</h1>
        <img src={Loadinggif}alt="loading" />
      </div>
    );
  }
}
