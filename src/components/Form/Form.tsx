import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';

import { Button } from '@material-ui/core';
import { operations } from 'redux/contacts';
import { getItems } from 'redux/contacts/contacts-selectors';
import 'react-phone-input-2/lib/style.css';
import { IVariants } from 'types/Variants.interface';
import { IContact } from 'types/Contacts.interface';

const s = require('./Form.module.css');

const variants: IVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

type Number = string | null | undefined;

const Form = (): JSX.Element => {
  const contacts: IContact[] = useSelector(getItems);
  const dispatch = useDispatch();

  const onSubmit = (name: string, number: Number): void => {
    const user = {
      name,
      number,
    };

    dispatch(operations.default.addContact(user));
  };
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<Number>(null);

  const nameId = useRef(uuidv4());

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const handlePhoneInput = (phone: Number): void => setNumber(phone);

  const reset = (): void => {
    setName('');
    setNumber(null);
  };

  const validateContact = (
    contactName: string,
    contacts: IContact[],
  ): boolean => {
    if (contacts.some(({ name }) => name === contactName)) {
      alert(`${contactName} is already in contacts.`);
      return false;
    } else return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const isContactValid: boolean = validateContact(name, contacts);

    if (isContactValid) {
      onSubmit(name, number);
      reset();
    }
  };

  return (
    <div className={s.container}>
      <motion.form
        initial="hidden"
        animate="visible"
        variants={variants}
        className={s.form}
        onSubmit={handleSubmit}
      >
        <label htmlFor={nameId.current}>
          <p className={s.form__label}>Name</p>
          <input
            type="text"
            name="name"
            className={s.form__firstInput}
            value={name}
            onChange={handleInputChange}
            id={nameId.current}
            placeholder="Enter name"
            required
          />
        </label>
        <label className={s.phoneLabel}>
          <p className={s.form__label}>Number</p>
          <PhoneInput
            // name="number"
            value={number}
            onChange={handlePhoneInput}
            country={'ua'}
            placeholder="+38068-555-55-55"
            enableSearch={true}
            disableSearchIcon={true}
            containerClass={s.phoneContainer}
            buttonClass={s.phoneButton}
            inputClass={s.phoneInput}
          />
        </label>
        <div className={s.submit__box}>
          <Button
            className={s.form__button}
            type="submit"
            disabled={name === '' || number === null}
            color="primary"
            variant="contained"
          >
            Add contact
          </Button>
        </div>
      </motion.form>
    </div>
  );
};

export default Form;
