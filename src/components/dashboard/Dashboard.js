import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PersonList from './PersonList';

class Dashboard extends React.Component {
  /*constructor(props) {
    super(props);

  }*/
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Dashboard />
          <PersonList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
