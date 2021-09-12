import React from 'react';
import logo from '../../src/images/logo.png';

const Header = () => {

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-xs-12 header-logo">
              <a href="index.html"><img src={logo} width="300" alt="" className="img-responsive logo"/></a>
            </div>
            <div className="col-md-7 col-xs-12 header-buttons">
              <a href="#" className="btn btn-primary">Call to action</a>
              <a href="#" className="btn btn-primary">Call to action</a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
