import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import addFilter from 'redux/contacts/contacts-action';

import { getFilter } from 'redux/contacts/contacts-selectors';

const s = require('./Filter.module.css');

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const value: string = useSelector(getFilter);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(addFilter(e.currentTarget.value));

  return (
    <label htmlFor="search" className={s.Search__box}>
      <p className={s.search__label}>Find contacts by name:</p>
      <input
        className={s.search__input}
        type="search"
        name="search"
        id="search"
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default Filter;
