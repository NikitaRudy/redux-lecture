const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store);
  } else {
    next(action);
  }
}

const promise = store => next => action => {
  if (typeof action.then === 'function') {
    action.then(next);
  } else {
    next(action);
  }
} 

const logger = store => next => action => {
  console.log('STATE:', store.getState());
  console.log('ACTION:', action);
  next(action);
  console.log('NEXT STATE:', store.getState());
}

module.exports = {
  logger,
  thunk,
  promise
}