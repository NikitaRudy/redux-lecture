const { compose, pipe } = require('./helpers');

function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let state = reducer(undefined, { type: '__INIT_ACTION__' });
  let subscribers = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      subscribers.forEach(subsriber => subsriber());
    },
    subscribe(subscriber) {
      subscribers = subscribers.concat(subscriber);

      return () => {
        subscribers = subscribers.filter(sub => sub !== subscriber);
      }
    },
  }
}

function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);

    preparedMiddlewares = middlewares.map(middleware => middleware(store));

    store.dispatch = compose(...preparedMiddlewares)(store.dispatch);

    return store;
  }
};

module.exports = { createStore, applyMiddleware}