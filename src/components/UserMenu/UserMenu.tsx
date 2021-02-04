import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Button } from '@material-ui/core';

import s from './UserMenu.module.css';

export default function UserMenu(): JSX.Element {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <img
        src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
        alt="avatar"
        width="32"
        className={s.avatar}
      />
      <span className={s.name}>Welcome, {name}</span>
      <Button
        type="button"
        color="default"
        variant="contained"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
