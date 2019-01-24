const redux = require('./redux/index')

const { incrementAsync, decrementAsync, increment, decrement } = require('./actions');
const { thunk, promise, logger } = require('./middlewares');
const reducer = require('./reducer');


const store = redux.createStore(reducer, redux.applyMiddleware(thunk, promise, logger));

const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');
const valueDiv = document.getElementById('value');

function handleStoreUpdate() {
  valueDiv.innerHTML = store.getState();
}
handleStoreUpdate();
const unsubscribe = store.subscribe(handleStoreUpdate)


decrementBtn.addEventListener('click', () => store.dispatch(decrementAsync(1)));
incrementBtn.addEventListener('click', () => store.dispatch(incrementAsync(1)));