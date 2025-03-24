import React from 'react';
import {  Link} from 'react-router-dom';
import { Nav } from '../Css';

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">LetYouCook</Link>
        </li>
        <li>
          <a href="http://localhost:3000/">Blog</a>
        </li>
      </ul>
    </Nav>
  );
};


export default Navbar;