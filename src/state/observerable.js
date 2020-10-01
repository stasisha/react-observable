import React, { useState, useCallback, useEffect } from 'react';
import ProxyPolyfillBuilder from 'proxy-polyfill/src/proxy';
import userEvent from '@testing-library/user-event';

let reaction;
const proxyPolyfill = ProxyPolyfillBuilder();

function useForceUpdate() {
  const [, setState] = useState(0);
  return useCallback(() => setState((s) => s + 1), []);
}

export function createStore(object) {
  const REACTIONS = Symbol('reactions');
  object[REACTIONS] = [];
  const handler = {
    get: function(target, key) {
      if (key === REACTIONS) {
        return undefined;
      }
      if (reaction) {
        let reactions = target[REACTIONS];
        if (!reactions[key]) {
          reactions[key] = [];
        }
        if (!reactions[key].includes(reaction)) {
          reactions[key].push(reaction);
        }
      }
      return target[key];
    },
    set: function(target, key, value) {
      let reactions = target[REACTIONS];
      reactions[key].forEach(r => {
        console.log('rerender', r);
        r();
      });
      target[key] = value;
      return true;
    }
  };
  return new proxyPolyfill(object, handler);
}

export const observe = (BaseComponent) => {
  return function Observe(props) {
    reaction = useForceUpdate();

    useEffect(() => reaction = undefined);

    return (
      <BaseComponent { ...props } />
    );
  };
};



