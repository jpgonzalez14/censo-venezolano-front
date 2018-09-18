import React from 'react';
import Plot from 'react-plotly.js';
//import axios from 'axios';

class GraphEdad extends React.Component {
  constructor(props) {
    super(props);
    let datos = undefined;
    let edades_datos = undefined;
    let edades_label = undefined;
    fetch('https://censovenezolanoback.herokuapp.com/censos/estadisticas')
      .then(res => res.json())
      .then(json => {
        datos = json.estadisticas;
        edades_label = ['Niños', 'Adolescentes', 'Adultos','Viejos'];
        edades_datos = [datos.edad.ninos, datos.edad.adolescentes, datos.edad.adultos, datos.edad.viejos];
      });
    
    
    this.state = {
      data: [{
        type: 'bar',
        x: edades_datos,
        y: edades_label,
        orientation: 'h'
      }],
      layout: {
        title: 'Perfil de la poblacion',
        width: 800,
        height: 600
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

export default GraphEdad;
