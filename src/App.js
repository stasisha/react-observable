import React from 'react';
import './App.css';
import MultiContext from './state/MultiContext';
import User from './User';
import Number from './Number';
import NumberContextProvider from './state/NumberContext';
import UserContextProvider from './state/UserContext';

function App() {
  return (
    <div className="App">
      <MultiContext contexts={ [NumberContextProvider, UserContextProvider] }>
        <Number />
        <hr />
        <User />
      </MultiContext>
    </div>
  );
}

export default App;

