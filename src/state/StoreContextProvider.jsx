import React, { createContext, useContext } from 'react';
import { createStore } from './observerable';


export const StoreContext = createContext(null);

export function useStoreContext() {
  return useContext(StoreContext);
}

function StoreContextContextProvider({ children }) {

  const store = createStore({
    name: "",
    lastName: "",
    number: 0,
    increment: () => store.number++,
    decrement: () => store.number--
  });

  return (
    <StoreContext.Provider value={ store }>
      { children }
    </StoreContext.Provider>
  );
}

export default StoreContextContextProvider;
