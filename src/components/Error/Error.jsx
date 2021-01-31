import React from 'react';
import s from './Error.module.css';
const Error = ({ error }) => {
  console.log(error);
  return (
    <div className={s.errorBox}>
      <h4 className={s.title}>
        Oops, something went wrong! Please, try again later.
      </h4>
      <p className={s.message}>{error.message}</p>
    </div>
  );
};

export default Error;
