/* eslint-disable no-unused-vars */
// ban methods = slice, splice, pop, shift, filter

// need to take falsy values out of array
// look in an array, find a falsy value
// take it out and return new array without falsy value

function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
