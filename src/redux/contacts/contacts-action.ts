import { createAction } from '@reduxjs/toolkit';

const addFilter = createAction<string>('contacts/addFilter');

export default addFilter;
