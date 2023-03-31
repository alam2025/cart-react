import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
      return (
            <nav className='header'>
                  <img src={logo} alt="" />
                  <div className='header'>
                        <a href="/Order">Order</a>
                        <a href="/review"> Order Review</a>
                        <a href="/inventory">Inventory</a>
                        <a href="/login">Login</a>
                  </div>
            </nav>
      );
};

export default Header;