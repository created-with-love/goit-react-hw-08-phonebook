import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { ToastContainer, toast } from 'react-toastify';
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
    const isEmailCorrect = ValidateEmail(email);
    console.log(isEmailCorrect);
    if (!isEmailCorrect) {
      toast.error('invalid email!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail,
      )
    ) {
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  }

  return (
    <div className={s.regBox}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
            min="7"
            max="16"
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
}
