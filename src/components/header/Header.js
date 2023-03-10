import React from 'react';
import './Header.css';
import TopHeader from './TopHeader';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
TopHeader;
const Header = () => {
  return (
    <>
      <TopHeader />
      <header id="masthead" className="site-header" role="banner">
        <div className="site-branding container">
          <div className="row">
            <div className="col-sm-4 header-logo">
              <Link to="/">
                <img
                  width="150"
                  height="70"
                  src="https://149842022.v2.pressablecdn.com/tyche/wp-content/uploads/sites/64/2017/06/logo.png"
                  class="custom-logo"
                  alt="Tyche Demo"
                  decoding="async"
                />
              </Link>
              <div className="site-title-description">
                <p className="site-description"></p>
              </div>
            </div>
            <div className="col-sm-8 header-banner"></div>
          </div>
        </div>
        <Navbar/>
      </header>
    </>
  );
};
export default Header;
