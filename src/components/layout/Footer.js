import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small dark-primary-color">
        <div className="container-fluid default-primary-color">
          <div className="row">
            <div className="col-md-12 py-4">
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

        <div className="footer-copyright text-center py-3 text-primary-color">
          © 2018 Copyright:
          <a
            className="text-primary-color"
            href="http://juanpgonzalez.com/"
            target="_blank"
          >
            {' '}
            Juan Pablo{' '}
          </a>
          &
          <a
            className="text-primary-color"
            href="http://rangel10.github.io/"
            target="_blank"
          >
            {' '}
            Ricardo Angel{' '}
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
