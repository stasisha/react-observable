import React, { createContext, useContext } from 'react';


export const UserContext = createContext(null);

export function useUserContext() {
  return useContext(UserContext);
}

function UserContextProvider({ children }) {

  const user = {
    name: "test",
    lastName: "loh"
  };

  return (
    <UserContext.Provider value={ user }>
      { children }
    </UserContext.Provider>
  );
}

export default UserContextProvider;
