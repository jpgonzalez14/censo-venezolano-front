import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class SideMenu extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{user.name}</h1>
            <h6 className="card-subtitle mb-2 text-muted">
              <strong> Org: </strong>
              {user.org}
            </h6>
            <p className="card-text">
              <strong> Email: </strong> {user.email}
            </p>
          </div>
        </div>
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
