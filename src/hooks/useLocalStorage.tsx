import { useState, useEffect } from 'react';

export default function useLocalStorage(key: string, defaultValue: string) {
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
  }, [defaultValue, key, state]);

  return [state, setState];
}
