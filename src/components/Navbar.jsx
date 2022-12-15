import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">BookStore CMS </h1>
      <ul>
        <Link to="/" className="nav-item m-2">
          BOOKS
        </Link>
        <Link to="/categories" className="nav-item m-2">
          CATEGORIES
        </Link>
      </ul>
      <ImUser />
    </nav>
  );
}

export default Navbar;
