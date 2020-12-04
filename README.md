# @cokoghenun/async-iterator

Easy to use async `forEach` and `map` utility functions

## Installation

```
$ npm install @cokoghenun/async-iterator
```

## Features

- Async `map`
- Async `forEach`

## Example

To use the `map` utility

```js
const asyncItr = require('@cokoghenun/async-iterator');

const myArray = ['1st async stuff to do', '2nd async stuff to do'];

const asyncGeneratedArray = await asyncItr.map(
  myArray,
  async (item, index, array) => {
    // do async stuff here
    return item;
  }
);
```

To use the `forEach` utility

```js
const asyncItr = require('@cokoghenun/async-iterator');

const myArray = ['1st async stuff to do', '2nd async stuff to do'];

await asyncItr.forEach(myArray, async (item, index, array) => {
  // do async stuff here
});
```

## API

```js
asyncItr.METHOD(ARRAY, CALLBACK(ITEM, INDEX, ARRAY));
```

Where

- **asyncItr** is an instance of `@cokoghenun/async-iterator`
- **METHOD** is a utility function i.e `map` or `forEach`
- **ARRAY** is the array to be operated on
- **CALLBACK** is an asynchronous funcion passed to the **METHOD** that returns
  - **ITEM** which is the current item being looped over
  - **INDEX** which is the index of **ITEM**
  - **ARRAY** which is a copy of the original **ARRAY**

## License

MIT
