import React from 'react';
import './App.css';
import StoreContextContextProvider from './state/StoreContextProvider';
import User from './User';
import Number from './Number';

function App() {
  return (
    <div className="App">
      <StoreContextContextProvider>
        <Number />
        <hr/>
        <User />
      </StoreContextContextProvider>
    </div>
  );
}

export default App;
