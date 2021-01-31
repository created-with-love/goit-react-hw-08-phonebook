import React from 'react';
import s from './Error.module.css';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const Error = ({ error }) => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(authOperations.clearError());
    window.history.back();
  };

  return (
    <div className={s.errorBox}>
      <h4 className={s.title}>
        Oops, something went wrong! Please, try again later.
      </h4>
      <p className={s.message}>{error.message}</p>
      <button onClick={handleBack}>Go back</button>
    </div>
  );
};

export default Error;
