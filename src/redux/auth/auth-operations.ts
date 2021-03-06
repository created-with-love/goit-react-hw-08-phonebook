import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Data, IState, IUser } from 'types/Contacts.interface';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  // axios makes life better and makes from his side request with token for all user operations with API
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

// body : {email, password, password}
const register = createAsyncThunk(
  'auth/register',
  async (credentials: { name: string; email: string; password: string }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);

      return response.data as Promise<Data>;
    } catch (error) {
      throw new Error(error);
    }
  },
);

// body : {email, password}
const logIn = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token);
      return response.data as Promise<Data>;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    throw new Error(error);
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as IState;
  const persistedToken = state.auth.token;

  // if token is null we won`t fetch info about user from the server
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unauthorized');
    //   return state;
  }

  token.set(persistedToken);

  try {
    //  data = {email, name}
    const { data } = await axios.get<IUser>('/users/current');
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

const clearError = createAsyncThunk('auth/clearError', () => {
  return null;
});

const operations = {
  register,
  logOut,
  logIn,
  getCurrentUser,
  clearError,
};

export default operations;
