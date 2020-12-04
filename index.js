const map = async (array, callback) => {
  const _array = [];
  for (let index = 0; index < array.length; index++) {
    const value = await callback(array[index], index, array);
    _array.push(value);
  }
  return _array;
};

const forEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

module.exports = {
  map,
  forEach,
};
