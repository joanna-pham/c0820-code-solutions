/* eslint-disable no-unused-vars */

// typescript
// C
// java type

function takeRight(array, count) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    count++;
    result.push(array[i]);
  }
  return result;
}
