import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.getCurrentUser.pending](state) {
      state.isFetchingUser = true;
      state.error = null;
    },
    [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [authOperations.getCurrentUser.rejected](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.error = action.error;
      state.isFetchingUser = false;
      state.token = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.error = action.error;
      state.token = null;
    },
    [authOperations.register.rejected](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.error = action.error;
      state.token = null;
    },
    [authOperations.getCurrentUser.rejected](state) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.isFetchingUser = false;
      state.token = null;
    },
    [authOperations.clearError.fulfilled](state) {
      state.error = null;
    },
  },
});

export default authSlice.reducer;
