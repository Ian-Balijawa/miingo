import { createContext } from 'react';
import { state } from '../state';
import useLocalStorage from '../hooks/useLocalStorage';
import { useSnapshot } from 'valtio';

export const userContext = createContext(null);

export const UserProvider = ({ children }) => {
  const snap = useSnapshot(state);
  const [loggedInUser] = useLocalStorage('user');
  const me = snap.users[0];
  console.log('me ===========>: ', me);
  console.log('loggedInUser: ', loggedInUser);

  return (
    <userContext.Provider value={{ user: me }}>{children}</userContext.Provider>
  );
};
