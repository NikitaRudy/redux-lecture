function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function pipe(head, ...tail) {
  return (...args) => {
    return tail.reduce((a, b) => b(a), head(...args))
  }
}
// const toUpperCase = str => str.toUpperCase();
// const getName = obj => obj.name;
// const hello = name => `Hello,${name}!`

// const user = { id: 1, name: 'Nikita', city: 'Minsk' };

// const greetUser = compose(
//   hello,
//   toUpperCase,
//   getName
// )

// const greetUser2 = pipe(
//   getName,
//   toUpperCase,
//   hello,
// )

// const result = hello(toUpperCase(getName(user)));

// console.log(result)
// console.log(greetUser(user));
// console.log(greetUser2(user));

module.exports = {
  pipe,
  compose,
}