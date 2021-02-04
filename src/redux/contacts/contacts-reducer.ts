import { createReducer, combineReducers } from '@reduxjs/toolkit';
import addFilter from './contacts-action';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { IContact } from 'types/Contacts.interface';

const items = createReducer([] as IContact[], {
  [fetchContacts.fulfilled.toString()]: (_, { payload }): IContact[] => {
    return payload as IContact[];
  },
  [addContact.fulfilled.toString()]: (_, { payload }): IContact[] =>
    payload as IContact[],
  [deleteContact.fulfilled.toString()]: (state: IContact[], { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [addFilter.toString()]: (_, { payload }) => payload as string,
});

const loading = createReducer(false, {
  [fetchContacts.pending.toString()]: () => true,
  [fetchContacts.fulfilled.toString()]: () => false,
  [fetchContacts.rejected.toString()]: () => false,
  [addContact.pending.toString()]: () => true,
  [addContact.fulfilled.toString()]: () => false,
  [addContact.rejected.toString()]: () => false,
  [deleteContact.pending.toString()]: () => true,
  [deleteContact.fulfilled.toString()]: () => false,
  [deleteContact.rejected.toString()]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected.toString()]: (_, action) => action.error,
  [addContact.rejected.toString()]: (_, action) => action.error,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
