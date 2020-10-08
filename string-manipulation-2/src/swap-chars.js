/* eslint-disable no-unused-vars */

// take an index in string
// location new location named secondIndex

function swapChars(firstIndex, secondIndex, string) {

  const letters = string.split('');
  const index1 = letters[firstIndex];

  letters[firstIndex] = letters[secondIndex];
  letters[secondIndex] = index1;

  return letters.join('');

}
