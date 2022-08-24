import React from 'react';
import { Link } from "react-router-dom";
import image from "./veziai.webp"

const Header = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img src={image} alt='LOGO' className='tinyLogo' />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/greeter">
              To-Do-app
            </Link>
            <Link className="nav-link" to="/calculator">
              Calculator
            </Link>
            <Link className="nav-link" to="/tdl">
              ToDoList
            </Link>
            <Link className="nav-link" to="/blog">
              BlogPosts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
