/* eslint-disable no-unused-vars */

// typescript
// C
// java type

function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }
  const result = array.slice((array.length - count), array.length);

  return result;

}
