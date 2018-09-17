import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class SideMenu extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <div className="col-md-12">
        <h2> {user.name} </h2>{' '}
        <p>
          {' '}
          <strong> Org: </strong> {user.org}{' '}
        </p>{' '}
        <p>
          {' '}
          <strong> Email: </strong> {user.email}{' '}
        </p>
      </div>
    );
    return (
      <div className="col-xs-12 col-md-3">
        <br /> {authLinks} <br />
      </div>
    );
  }
}

SideMenu.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SideMenu);
