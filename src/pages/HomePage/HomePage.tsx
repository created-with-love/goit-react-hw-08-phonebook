import React from 'react';

import homeSmall from 'images/homeSmall.gif';
import homeBig from 'images/homeBig.gif';
import s from './HomePage.module.css';

const HomePage = (): JSX.Element => (
  <div className={s.container}>
    <div className={s.titleContainer}>
      <h1 className={s.title}>
        <span className={s.titleText}> PhoneBook</span>
      </h1>
      <span className={s.titleDesc}>
        One application for all your contacts.
      </span>
      <span className={s.titleDesc}>Simple. Secure. Free.</span>
    </div>
    <img src={homeSmall} alt="HomePageLogo" className={s.logo} />
    <img src={homeBig} alt="HomePageLogoBig" className={s.logoBig} />
  </div>
);

export default HomePage;
