import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function ButtonAppBar() {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            style={{ marginLeft: -12, marginRight: 20 }}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
            Censo Venezolano
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch('https://censovenezolanoback.herokuapp.com/users/getUsers') // returns a promise object
      .then(result => result.json()) // still returns a promise object, U need to chain it again
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <ul>
          {this.state.users.map(user => (
            <li key={user.name}>{user.email}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
