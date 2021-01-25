import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/contacts');
      const { data } = await axios.get('/contacts?_sort=id&_order=desc');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user, { rejectWithValue }) => {
    const contact = {
      name: user.name,
      number: user.number,
      id: uuidv4(),
    };
    try {
      await axios.post('/contacts', contact);
      return contact;
      // const { data } = await axios.get('/contacts?_sort=id&_order=desc');
      // return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default { deleteContact, addContact, fetchContacts };
