import React, { Component } from 'react';
import './Path.css'

export default class PathOne extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos: []
    };

  }


  render() {
    return (
      <div className="container pageContainer">
        <h1 className="pageHeader changa6 white">This is Path One</h1>
        <p className="changa-2 white">Link to me to use as a test component</p>
      </div>
    )
  }
}
