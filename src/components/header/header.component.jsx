import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.sass';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop/hats">
        SHOP
      </Link>
      <Link className="option" to="/shop/hats">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
