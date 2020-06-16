import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='navbarList'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
