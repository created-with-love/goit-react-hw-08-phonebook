import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div className={s.loaderContainer}>
        <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000} //3 secs
        />
      </div>
    );
  }
}
