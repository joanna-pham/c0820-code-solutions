/* eslint-disable no-unused-vars */

// create empty array for new result
// look in an array (for loop)
// find last index in array
// take it out of the array
// push new results in empty array

function initial(array) {
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    result.push(array[i]);
  }
  return result;
}
