import React, { useRef } from 'react';
import { useNumberContext } from './state/NumberContext';

function Number() {

  const store = useNumberContext();
  const refRender = useRef(0);

  return (
    <>
      <h2>Number</h2>
      <p>Renders: { refRender.current++ }</p>
      <pre>{ store.number }</pre>
    </>
  );
}

export default Number;
