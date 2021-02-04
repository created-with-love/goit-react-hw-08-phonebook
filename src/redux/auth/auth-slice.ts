import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { IAuth, IUser } from 'types/Contacts.interface';

const initialState: IAuth = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  error: null,
};

interface IRegister {
  token: string | null;
  user: IUser;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authOperations.register.fulfilled.toString()](
      state,
      action: PayloadAction<IRegister>,
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },

    [authOperations.logIn.fulfilled.toString()](
      state,
      action: PayloadAction<IRegister>,
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },

    [authOperations.logOut.fulfilled.toString()](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.getCurrentUser.pending.toString()](state) {
      state.isFetchingUser = true;
      state.error = null;
    },
    [authOperations.getCurrentUser.fulfilled.toString()](
      state,
      action: PayloadAction<IUser>,
    ) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [authOperations.getCurrentUser.rejected.toString()](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.error = action.error;
      state.isFetchingUser = false;
      state.token = null;
    },
    [authOperations.logIn.rejected.toString()](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.error = action.error;
      state.isFetchingUser = false;
      state.token = null;
    },
    [authOperations.register.rejected.toString()](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.error = action.error;
      state.isFetchingUser = false;
      state.token = null;
    },
    [authOperations.clearError.fulfilled.toString()](state) {
      state.error = null;
    },
  },
});

export default authSlice.reducer;
