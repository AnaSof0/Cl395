import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <h4>CI 395<br/>Ana Ramirez</h4>
      
      <h2 className="navbar-title">Monster Project</h2>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/s1" className="navbar-link">SE 1</Link>
        </li>
        <li className="navbar-item">
          <Link to="/s2" className="navbar-link">SE 2</Link>
        </li>
        <li className="navbar-item">
          <Link to="/s3" className="navbar-link">SE 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

