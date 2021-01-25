import React from 'react';
import { useDispatch } from 'react-redux';

import Form from '../../components/Form';
import Section from '../../components/Section';
import Contacts from '../../components/Contacts';
import Filter from '../../components/Filter';
import { authOperations } from 'redux/auth';

function ContactsPage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export default ContactsPage;
