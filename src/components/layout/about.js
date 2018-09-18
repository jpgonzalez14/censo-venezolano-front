import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <br />
        <br />
        <div className="my-auto showcase-text">
          <h1 className="primary-text-color">VeCenso</h1>
          <small className="secondary-text-color">
            Primer censo de emigracion venezolana en latinoamerica.
          </small>
          <p className="lead mb-0 text-primary-color">
            El Censo recolecta información sobre la población y dónde y cómo
            vive. También mide características sociodemográficas: edad de la
            población, migraciones internas, condiciones sociales, nivel
            educativo, y condiciones de las vida, entre otros. Así pues, el
            Censo no es solo una fotografía de la población en un momento
            determinado, sino que permite generar importantes estadísticas.
            <br />
            Nosotros buscamos ayudar a que la personas entiendan quienes son los
            emigrantes venezolanos a partir de datos. Queremos que por medio de
            visualizacion de informacion de datos estadisticos, entidades
            gubernamentales y no gubernamentales puedan dirigir los recursos de
            ayuda correctamente. Si haces parte de alguna entidad{' '}
            <strong>unete a nosotros</strong>.
          </p>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default About;