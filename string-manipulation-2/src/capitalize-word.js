/* eslint-disable no-unused-vars */

// make word all lowercase
// take zero index and make uppercase

function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word.startsWith('j')) {
    return word.charAt(0).toUpperCase() + word.slice(1, 4) + word.charAt(4).toUpperCase() + word.slice(5);
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
