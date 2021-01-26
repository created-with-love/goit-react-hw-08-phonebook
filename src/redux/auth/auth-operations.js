import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  // axios makes life better and makes from his side request with token for all user operations with API
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

// body : {email, password, password}
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

// body : {email, password}
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  // if token is null we won`t fetch info about user from the server
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
    //   return state;
  }

  token.set(persistedToken);

  try {
    //  data = {email, name}
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {}
});

const operations = {
  register,
  logOut,
  logIn,
  getCurrentUser,
};

export default operations;
