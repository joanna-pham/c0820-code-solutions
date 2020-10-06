/* eslint-disable no-unused-vars */

// make empty array
// find 1st index
// push rest of index in new array

function tail(array) {
  const result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
