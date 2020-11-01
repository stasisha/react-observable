import React from 'react';

function MultiContext({ contexts, children }) {
  return contexts.reduce((children, Context) => {
    return (<Context intialValue={}>{ children }</Context>);
  }, children);
}

export default MultiContext;
