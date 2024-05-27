import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://cdn.sahityapedia.com/images/profile/b38a1d71609a4c8a66bfcd8f3fb64632_93a74605228bf816114e6f5aa722cec4_600.jpg" alt="Logo" className="logo" />
        <span className="platform-name">Vyas Inspires</span>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">
          <button className="nav-button">Home</button>
        </Link>
        <Link to="/about" className="nav-link">
          <button className="nav-button">About Us</button>
        </Link>
        <Link to="/contact" className="nav-link">
          <button className="nav-button">Contact</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
