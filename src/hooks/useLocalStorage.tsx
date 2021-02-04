import { useState, useEffect, Dispatch } from 'react';
import { IContact } from 'types/Contacts.interface';

type ILocalStorage = [state: IContact[], setState: Dispatch<any>];

export default function useLocalStorage(
  key: string,
  defaultValue: string,
): ILocalStorage {
  const local = window.localStorage.getItem(key) as string;

  const [state, setState] = useState(() => {
    return JSON.parse(local) || defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    const localstorageArrayLength = JSON.parse(local).length === 0;
    if (localstorageArrayLength) {
      setState(defaultValue);
    }
  }, [defaultValue, key, local, state]);

  return [state, setState];
}
