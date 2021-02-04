import React from 'react';
import { NavLink } from 'react-router-dom';
const s = require('./AuthNav.module.css');

export default function AuthNav(): JSX.Element {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
