import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import regImg from '../../images/reg.gif';
import s from './RegisterPage.module.css';
import { Button, TextField } from '@material-ui/core';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.regBox}>
      <div>
        <img
          src={regImg}
          alt="registrationGif"
          className={s.regImg}
          width="320"
          height="180"
        ></img>
      </div>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          <TextField
            type="text"
            id="outlined-basic"
            name="name"
            value={name}
            label="Name"
            onChange={handleChange}
            variant="outlined"
          />
        </label>

        <label className={s.label}>
          <TextField
            type="email"
            name="email"
            id="outlined-basic2"
            value={email}
            label="Email"
            onChange={handleChange}
            variant="outlined"
          />
        </label>

        <label className={s.label}>
          <TextField
            type="password"
            name="password"
            id="outlined-basic3"
            value={password}
            label="Password"
            onChange={handleChange}
            variant="outlined"
          />
        </label>
        <div className={s.registrBtn}>
          <Button type="submit" color="primary" variant="contained">
            Registration
          </Button>
        </div>
      </form>
    </div>
  );
}
