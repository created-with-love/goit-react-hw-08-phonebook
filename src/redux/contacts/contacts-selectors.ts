import memoize from 'memoizee';
import { IState, IContact } from '../../types/Contacts.interface';

export const getItems = (state: IState) => state.contacts.items;
export const getFilter = (state: IState) => state.contacts.filter;
export const isLoading = (state: IState) => state.contacts.loading;

export const filteredContacts = memoize(state => {
  const contacts: IContact[] = getItems(state);
  const filter: string = getFilter(state);

  const getFiltredContacts = (contacts: IContact[]) => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(person =>
      person.name.toLowerCase().includes(lowerCaseFilter),
    );
  };
  return getFiltredContacts(contacts);
});
