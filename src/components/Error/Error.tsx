import React from 'react';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const s = require('./Error.module.css');

interface IError {
  error: {
    message: string;
  };
}

const Error = ({ error }: IError): JSX.Element => {
  const dispatch = useDispatch();

  const handleBack = (): void => {
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
