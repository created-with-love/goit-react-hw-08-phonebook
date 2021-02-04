import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

// import { authSelectors } from 'redux/auth';
import regImg from 'images/reg.gif';
import s from './RegisterPage.module.css';
import { Button, TextField } from '@material-ui/core';

const RegisterPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // const errorObj = useSelector(authSelectors.getError);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = e;
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
            required
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
            required
          />
        </label>

        <label className={s.label}>
          <TextField
            type="password"
            name="password"
            id="standard-password-input"
            value={password}
            label="Password"
            onChange={handleChange}
            variant="outlined"
            helperText="password must be longer than 7 characters"
            required
          />
        </label>

        <div className={s.registrBtn}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={
              name === '' ||
              email === '' ||
              password === '' ||
              password.length < 7
            }
          >
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
