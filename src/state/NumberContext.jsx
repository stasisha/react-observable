import React, { createContext, useContext } from 'react';

export const NumberContext = createContext(null);

export function useNumberContext() {
  return useContext(NumberContext);
}

function NumberContextProvider({ children, initialValue }) {
  const store = {
    number: initialValue
  };
  return (
    <NumberContext.Provider value={ store }>
      { children }
    </NumberContext.Provider>
  );
}

export default NumberContextProvider;
