import React from 'react';
import './About.css';
import { Link, Outlet } from "react-router-dom";

const About = () => (
  <div className="About">
    <div className="p-3" data-testid="Movies">
      About Commponent
    </div>
    <div className="p-3">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/about/cats">
            Cats
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about/dogs">
            Dogs
          </Link>
        </li>
      </ul>
      <Outlet className="px-5" />
    </div>
  </div>
);

export default About;
