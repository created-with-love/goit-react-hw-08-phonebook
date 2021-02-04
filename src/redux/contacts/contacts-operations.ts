import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

interface IUser {
  name: string;
  number: string | null | undefined;
}

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IUser[]>('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
      // return new Error(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user: IUser, { rejectWithValue }) => {
    try {
      await axios.post('/contacts', user);
      // return contact;
      const { data } = await axios.get<IUser[]>('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: number | string, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { deleteContact, addContact, fetchContacts };
