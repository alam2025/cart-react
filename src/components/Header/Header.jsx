import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink';

const Header = () => {
      return (
            <nav className='header'>
                  <img src={logo} alt="" />
                  <div className='header'>
                        <ActiveLink to="/">Shop</ActiveLink>
                        <ActiveLink to="/orders"> Order Review</ActiveLink>
                        <ActiveLink to="/inventory">Inventory</ActiveLink>
                        <ActiveLink to="/login">Login</ActiveLink>
                  </div>
            </nav>
      );
};

export default Header;