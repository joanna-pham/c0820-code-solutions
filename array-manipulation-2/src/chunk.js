/* eslint-disable no-unused-vars */

function chunk(array, size) {
  const result = [];
  let tempResult = [];
  for (let i = 0; i < array.length; i++) {
    if (tempResult.length <= size) { // how many items are in array
      tempResult.push(array[i]);
    }
    if (tempResult.length === size) {
      result.push(tempResult);
      tempResult = [];
    }
    if (array.length - 1 === i && tempResult.length > 0) {
      result.push(tempResult);
    }
  }
  return result;
}
