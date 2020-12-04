# async-iterator

Easy to use async forEach and map utility functions

## usage

To use the `map` utility

```js
const asyncIterator = require('@cokoghenun/async-iterator');

const myArray = ['1st async stuff to do', '2nd async stuff to do'];
const asyncGeneratedArray = await asyncIterator.map(
  myArray,
  async (item, index, myArray) => {
    // do async stuff here
    return item;
  }
);
```

To use the `forEach` utility

```js
const asyncIterator = require('@cokoghenun/async-iterator');

const myArray = ['1st async stuff to do', '2nd async stuff to do'];
await asyncIterator.forEach(myArray, async (item, index, myArray) => {
  // do async stuff here
});
```
