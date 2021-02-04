import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import logGif from 'images/log.gif';
import { Button, TextField } from '@material-ui/core';
import s from './LoginPage.module.css';

export default function LoginPage(): JSX.Element {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.loginBox}>
      <div className={s.gifBox}>
        <img src={logGif} alt="loginGif" width="169" height="40" />
      </div>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          <TextField
            type="email"
            name="email"
            id="outlined-basic"
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
            id="outlined-basic2"
            value={password}
            label="Password"
            onChange={handleChange}
            variant="outlined"
          />
        </label>
        <div className={s.loginBtnBox}>
          <Button
            type="submit"
            className={s.loginBtn}
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
