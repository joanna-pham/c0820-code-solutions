/* eslint-disable no-unused-vars */

function numVowels(string) {
  let count = 0;
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === vowel[i]) {
      count++;
    }
  }
  return count;
}
