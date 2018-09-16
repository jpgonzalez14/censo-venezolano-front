import React, { Component } from 'react';

class Register extends Component {
  //component state
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      org: '',
      country: '',
      city: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //on change, every time the user enter a parameter.
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      org: this.state.org,
      country: this.state.country,
      city: this.state.city,
      password: this.state.password
    };
    console.log(newUser);
  }
  render() {
    return (
      <div className="container-fluid">
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Jhon Doe"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Org</label>
            <input
              type="text"
              className="form-control"
              placeholder="Apartment, studio, or floor"
              name="org"
              value={this.state.org}
              onChange={this.onChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={this.state.city}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                name="country"
                value={this.state.country}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label">Check me out</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <br />
      </div>
    );
  }
}

export default Register;
