import React, { useRef } from 'react';
import { observe } from './state/observerable';
import { useStoreContext } from './state/StoreContextProvider';

function Number() {

  const store = useStoreContext();
  const refRender = useRef(0);

  return (
    <>
      <h2>Number</h2>
      <button onClick={ () => store.increment() }> +1</button>
      <button onClick={ () => store.decrement() }> -1</button>
      <p>Renders: { refRender.current++ }</p>
      <pre>{ store.number }</pre>
    </>
  );
}

export default observe(Number);
