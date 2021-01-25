import memoize from 'memoizee';

export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const isLoading = (state) => state.contacts.loading;

export const filteredContacts = memoize((state) => {
  const contacts = getItems(state);
  const filter = getFilter(state);

  const getFiltredContacts = (contacts) => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter((person) =>
      person.name.toLowerCase().includes(lowerCaseFilter)
    );
  };
  return getFiltredContacts(contacts);
});
