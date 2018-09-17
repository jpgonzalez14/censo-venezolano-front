import React, { Component } from 'react';
import PieGraph from '../graphs/PieGraph';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid default-primary-color">
          <h1 className="text-primary-color">Header title</h1>
          <p className="text-primary-color">lorem ipsum deorum emp</p>
        </div>
        <div className="container-fluid">
          <PieGraph />
        </div>
      </div>
    );
  }
}

export default Landing;
