import React, { Component } from 'react';
import PieGraph from '../graphs/PieGraph';
import GraphEdad from '../graphs/graphEdad';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <GraphEdad />
        </div>
      </div>
    );
  }
}

export default Landing;
