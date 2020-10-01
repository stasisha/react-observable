import React, { useRef } from 'react';
import { observe } from './state/observerable';
import { useStoreContext } from './state/StoreContextProvider';

function User() {

  const store = useStoreContext();
  const refRender = useRef(0);

  return (
    <>
      <h2>User</h2>
      <p>Renders: { refRender.current++ }</p>
      <input
        placeholder="Name"
        onChange={ e => (store.name = e.target.value) }
        value={ store.name }
      />
      <input
        placeholder="LastName"
        onChange={ e => (store.lastName = e.target.value) }
        value={ store.lastName }
      />
    </>
  );
}

export default observe(User);
