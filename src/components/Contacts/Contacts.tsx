import React from 'react';
import { FaTrash, FaAddressCard } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Loader from '../Loader';
import { operations } from 'redux/contacts';
import { filteredContacts, isLoading } from 'redux/contacts/contacts-selectors';
import { authSelectors } from 'redux/auth';
import { IContact } from 'types/Contacts.interface';
import { IVariants } from 'types/Variants.interface';

const s = require('./Contacts.module.css');

const variants: IVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Contacts = (): JSX.Element => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(isLoading);
  const isLoggedIn: boolean = useSelector(authSelectors.getIsLoggedIn);

  React.useEffect(() => {
    isLoggedIn && dispatch(operations.fetchContacts());
  }, [dispatch, isLoggedIn]);

  const contacts: IContact[] = useSelector(filteredContacts);

  const listClasses = classNames({
    [s.list]: true,
    'list-border': contacts.length,
  });

  const handleDeleteContact = (id: number | string) => {
    dispatch(operations.deleteContact(id));
  };

  return (
    <div className={listClasses}>
      {loading && <Loader />}
      <ul className={s.list__ul}>
        {contacts.map(person => (
          <motion.li
            initial="hidden"
            animate="visible"
            variants={variants}
            key={person.id}
            className={s.search__contact}
          >
            <IconContext.Provider
              value={{
                color: 'black',
                size: '1.6em',
                className: 'react-icons',
              }}
            >
              <FaAddressCard />
            </IconContext.Provider>
            <p className={s.search__text}>
              {person.name} : {person.number}
            </p>
            <div className={s.trash}>
              <IconContext.Provider
                value={{
                  color: 'red',
                  size: '1.1em',
                  className: 'react-icons',
                }}
              >
                <FaTrash onClick={() => handleDeleteContact(person.id)} />
              </IconContext.Provider>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
