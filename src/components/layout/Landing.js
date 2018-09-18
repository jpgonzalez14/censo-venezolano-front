import React, { Component } from 'react';
import PieGraph from '../graphs/PieGraph';
import GraphEdad from '../graphs/GraphEdad';
import GraphEducacion from '../graphs/GraphEducacion';
import GraphEnfermedades from '../graphs/GraphEnfermedades';
import GraphProfesion from '../graphs/GraphProfesion';
import GraphQueHace from '../graphs/GraphQueHace';
import GraphPais from '../graphs/GraphPais';
import GraphCiudad from '../graphs/GraphCiudad';
import GraphFechaIngreso from '../graphs/GraphFechaIngreso';
import GraphIngresos from '../graphs/GraphIngresos';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <GraphEdad />
          <GraphEducacion />
          <GraphEnfermedades />
          <GraphProfesion />
          <GraphQueHace />
          <GraphPais />
          <GraphCiudad />
          <GraphFechaIngreso />
          <GraphIngresos />
        </div>
      </div>
    );
  }
}

export default Landing;
