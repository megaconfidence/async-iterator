# @cokoghenun/async-iterator

Easy to use async `forEach` and `map` utility functions

## Installation

```
$ npm install @cokoghenun/async-iterator
```

## Features

- Async `forEach`
- Async `map`

## Example

To use the async `map` utility, call the `asyncMap` method:

```js
const iterator = require('@cokoghenun/async-iterator');

const myArray = ['1st async stuff to do', '2nd async stuff to do'];

const asyncGeneratedArray = await iterator.asyncMap(
  myArray,
  async (item, index, array) => {
    // do async stuff here
    return item;
  }
);
```

To use the async `forEach` utility, call the `asyncForEach` method: 

```js
const iterator = require('@cokoghenun/async-iterator');

const myArray = ['1st async stuff to do', '2nd async stuff to do'];

await iterator.asyncForEach(myArray, async (item, index, array) => {
  // do async stuff here
});
```

## API

```js
iterator.METHOD(ARRAY, CALLBACK(ITEM, INDEX, ARRAY));
```

Where

- **iterator** is an instance of `@cokoghenun/async-iterator`
- **METHOD** is a utility function i.e `asyncMap` or `asyncForEach`
- **ARRAY** is the array to be operated on
- **CALLBACK** is an asynchronous funcion passed to the **METHOD** that returns
  - **ITEM** which is the current item being looped over
  - **INDEX** which is the index of **ITEM**
  - **ARRAY** which is a copy of the original **ARRAY**

## License

[MIT](./MIT-LICENSE.txt)
