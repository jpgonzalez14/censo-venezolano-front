import React from 'react';
import Plot from 'react-plotly.js';
//import axios from 'axios';

class GraphEdad extends React.Component {
  componentDidMount() {
    fetch('https://censovenezolanoback.herokuapp.com/censos/estadisticas')
      .then(res => res.json())
      .then(json =>
        this.setState({
          data: [
            {
              type: 'bar',
              x: [
                json.estadisticas.edad.ninos,
                json.estadisticas.edad.adolescentes,
                json.estadisticas.edad.adultos,
                json.estadisticas.edad.viejos
              ],
              y: ['Niños', 'Adolescentes', 'Adultos', 'Viejos'],
              orientation: 'h'
            }
          ],
          layout: {
            title: 'Perfil de la poblacion',
            width: 800,
            height: 600
          },
          frames: [],
          config: {}
        })
      );
  }

  constructor(props) {
    super(props);
    let datos = [];
    let edades_datos = [];
    let edades_label = [];

    this.state = {
      data: [
        {
          type: 'bar',
          x: edades_datos,
          y: edades_label,
          orientation: 'h'
        }
      ],
      layout: {
        title: 'Perfil de la poblacion',
        width: 800,
        height: 600
      },
      frames: [],
      config: {}
    };
    console.log(edades_datos);
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

export default GraphEdad;
