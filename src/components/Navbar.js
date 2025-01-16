/* eslint-disable jsx-a11y/anchor-is-valid */
import './Nav.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar topp navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img
            src='./logo.png'
            alt="Logo"
            className="me-2"
            style={{ height: '45px', width: '45px' }}
          />Battery Protector
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
          <a className="nav-link"> </a>
        </li>
        
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <i className="fas fa-home me-1"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features-container">
                <i className="fas fa-cogs me-1"></i> Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/CycloneAddons/battery-protector"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github me-1"></i> GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://dsc.gg/CycloneAddons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-discord me-1"></i> Discord
              </a>
            </li>
            

            <li className="nav-item">
          <a className="nav-link"> </a>
        </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
