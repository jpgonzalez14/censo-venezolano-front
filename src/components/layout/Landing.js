import React, { Component } from 'react';
import PieGraph from '../graphs/PieGraph';
import graphEdad from '../graphs/GraphEdad';

class Landing extends Component {
  render() {
    return (
      <div>
        <header className="masthead default-primary-color text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5 text-primary-color">VeCenso</h1>
                <h3 className="mb-5 text-primary-color">
                  El primer censo de emigracion venezolana Online
                </h3>
              </div>
            </div>
          </div>
        </header>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>¿QUÉ ES?</h2>
          <p className="lead mb-0">
            Un censo de población y vivienda, como el que se realizará en 2018,
            es el conteo y la caracterización de todos los residentes, viviendas
            y hogares en el territorio nacional. A través de un censo sabemos
            cuántos somos, dónde estamos y cómo vivimos. Toda esta información
            es utilizada para que diferentes organismos públicos y privados
            tomen decisiones políticas, sociales y económicas que beneficien a
            todos los residentes en el país.
          </p>
        </div>
        <div className="container-fluid">
          <GraphEdad />
        </div>
      </div>
    );
  }
}

export default Landing;
