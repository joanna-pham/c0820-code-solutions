/* eslint-disable no-unused-vars */

// make words lowercase
// split words at spaces
// take each word's beginning letter
// capitalize it

function capitalizeWords(string) {
  string = string.toLowerCase();
  string = string.split(' ');
  for (let i = 0; i < string.length; i++) {
    // string[i] is the every word - every first letter (charAt(0)) will be uppercase
    const firstLetter = string[i].charAt(0).toUpperCase();
    // for every word, take the version with capital letter and concatenate with the rest of string
    string[i] = firstLetter + string[i].substr(1);
  }
  // add space between words
  return string.join(' ');
  // return string; // returns word in an array
}
