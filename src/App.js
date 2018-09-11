import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

class App extends React.Component {
  /*constructor(props) {
    super(props);

  }*/
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Prueba</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
