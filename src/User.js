import React, { useRef } from 'react';
import { useUserContext } from './state/UserContext';

function User() {

  const store = useUserContext();
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

export default User;
