import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <h2 className="navbar-title">Monster Project</h2>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="s1" className="navbar-link">SE 1</a></li>
        <li className="navbar-item"><a href="s2" className="navbar-link">SE 2</a></li>
        <li className="navbar-item"><a href="s3" className="navbar-link">SE 3</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
