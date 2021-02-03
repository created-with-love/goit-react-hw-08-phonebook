// import types from './contacts-types';
// import { createAction } from '@reduxjs/toolkit';

// const addFilter = createAction('contacts/addFilter');

const addFilter = (filter: string) => ({
  type: 'contacts/addFilter',
  payload: filter,
});

export default addFilter;
