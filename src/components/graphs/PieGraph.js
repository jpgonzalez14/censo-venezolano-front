import React from 'react';
import Plot from 'react-plotly.js';

class PieGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          values: [19, 26, 55],
          labels: ['Residential', 'Non-Residential', 'Utility'],
          type: 'pie'
        }
      ],
      layout: {
        height: 500,
        width: 500
      },
      frames: [],
      config: {}
    };
  }

  render() {
    return (
      <Plot
        data={this.state.data}
        layout={this.state.layout}
        frames={this.state.frames}
        config={this.state.config}
        onInitialized={figure => this.setState(figure)}
        onUpdate={figure => this.setState(figure)}
      />
    );
  }
}

export default PieGraph;
