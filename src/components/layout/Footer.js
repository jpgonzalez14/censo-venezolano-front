import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">
                <a>
                  <i className="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {' '}
                  </i>
                </a>
                <a>
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {' '}
                  </i>
                </a>
                <a>
                  <i className="fab fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {' '}
                  </i>
                </a>
                <a>
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {' '}
                  </i>
                </a>
                <a>
                  <i className="fab fa-github fa-lg white-text fa-2x" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="http://juanpgonzalez.com/"> juanpgonzalez.com</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
