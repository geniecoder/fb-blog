import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../css/header.css'

const Header = ({ isAuthenticated }) => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [active, setActive] = useState('');

  useEffect(() => {
    console.log('active: ', active)
  }, [active])

  const toggleMenu = () => {
    console.log("clicked");
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <a className="navbar-brand" href="/">
        Logo
      </a>
      <button
        id="navbar-toggle-button"
        className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
        type="button"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
        <div
          className={`nav collapse navbar-collapse ${
            isMenuOpen ? "show" : ""
          } justify-content-end`}
        >
          <ul className="navbar-nav">
            <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
              <Link to="/" onClick={() => setActive('home')}>Home</Link>
            </li>
            <li className={`nav-item ${active === 'menu1' ? 'active' : ''}`}>
              <Link to="/" onClick={() => setActive('menu1')}>menu 1</Link>
            </li>
            <li className={`nav-item ${active === 'menu2' ? 'active' : ''}`}>
              <Link to="/" onClick={() => setActive('menu2')}>menu 2</Link>
            </li>
            {!isAuthenticated && (
              <>
                <li
                  className={`nav-item ${
                    active === "login" ? "active" : ""
                  }`}
                >
                  <Link to="/login" onClick={() => setActive('login')}>Login</Link>
                </li>
                <li className={`nav-item ${active === 'signup' ? 'active' : ''}`}>
                  <Link to="/signup" onClick={() => setActive('signup')}>Signup</Link>
                </li>
              </>
            )}
            {isAuthenticated && (
              <>
                <li className={`nav-item ${active === 'dashboard' ? 'active' : ''}`}>
                  <Link to="/dashboard" onClick={() => setActive('dashboard')}>Dashboard</Link>
                </li>
                <li className={`nav-item ${active === 'logout' ? 'active' : ''}`}>
                  <Link to="/logout" onClick={() => setActive('logout')}>Logout</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
