/* eslint-disable no-unused-vars */

// for loop
// has an if statement
// check if value is in array (array[i] === value)
// -- return true

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
