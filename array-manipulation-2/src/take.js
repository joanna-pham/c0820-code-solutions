/* eslint-disable no-unused-vars */

function take(array, count) {
  const result = [];
  if (!array.length) {
    return result;
  }
  for (let i = 0; i < count; i++) {
    result.push(array[i]);
  }
  return result;
}
