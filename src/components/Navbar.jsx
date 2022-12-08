import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <h1 className='navbar-brand'>BookStore CMS </h1>
        <ul>
          <Link to='/' className='nav-item'>
            BOOKS
          </Link>
          <Link to='/categories' className='nav-item'>
            CATEGORIES
          </Link>
        </ul>
        <ImUser />
      </nav>
    );
  }
}

export default Navbar;
