const increment = amount => ({ type: 'INCREMENT', payload: amount });
const decrement = amount => ({ type: 'DECREMENT', payload: amount });

const incrementAsync = amount => store => {
  setTimeout(() => {
    store.dispatch(increment(amount));
  }, 1000);
};

const decrementAsync = amount => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(decrement(amount));
  }, 1000);
});

module.exports = {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
}