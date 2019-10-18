import React from 'react';
import {Link} from 'gatsby';

export default () => (
  <header className="header">
    <div className="header_branding">
      <Link to="/">
        <h1>HAWC</h1>
        <p>Harnett Animal Welfare Coalition</p>
      </Link>
    </div>
    <nav className="header_nav">
      <Link to="/About"><li className="header_nav-item">About</li></Link>
      <Link to="/GetInvolved"><li className="header_nav-item">Get Involved</li></Link>
      <Link to="/Programs"><li className="header_nav-item">Programs</li></Link>
      <Link to="/Calendar"><li className="header_nav-item">Calendar</li></Link>
      <Link to="/Donate"><li className="header_nav-item donate">Donate</li></Link>
    </nav>
  </header>
)
