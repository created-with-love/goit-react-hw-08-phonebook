import React from 'react';
import LoaderEl from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

const Loader = (): JSX.Element => {
  //other logic
  return (
    <div className={s.loaderContainer}>
      <LoaderEl
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </div>
  );
};

export default Loader;
