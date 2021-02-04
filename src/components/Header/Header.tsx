import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

import s from './Header.module.css';

const Header = (): JSX.Element => {
  const isLoggedIn: boolean = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
