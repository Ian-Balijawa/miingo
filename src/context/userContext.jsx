import { createContext } from 'react';
import { useUser } from '../hooks/useUser';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useUser();
  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
