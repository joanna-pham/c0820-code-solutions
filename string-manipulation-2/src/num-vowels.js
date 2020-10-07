/* eslint-disable no-unused-vars */

function numVowels(string) {
  let count = 0;
  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (const v of string) {
    if (vowel.includes(v)) {
      count++;
    }
  }
  return count;
}
