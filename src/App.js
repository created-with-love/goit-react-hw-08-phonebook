import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './components/Form';
import Section from './components/Section';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import operation from 'redux/contacts/contacts-operations';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(operation.fetchContacts());
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

export default App;
