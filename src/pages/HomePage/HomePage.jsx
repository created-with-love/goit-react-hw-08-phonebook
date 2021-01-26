import React from 'react';

import s from './HomePage.module.css';

const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => (
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
    <img
      src="https://i.gifer.com/fzUl.gif"
      alt="HomePageLogo"
      className={s.logo}
    />
    <img
      src="https://i.gifer.com/3dAZ.gif"
      alt="HomePageLogoBig"
      className={s.logoBig}
    />
  </div>
);

export default HomePage;
