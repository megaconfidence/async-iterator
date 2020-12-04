const map = async (array, callback) => {
  const arr = [];
  for (let index = 0; index < array.length; index++) {
    const val = await callback(array[index], index, array);
    arr.push(val);
  }
  return arr;
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
