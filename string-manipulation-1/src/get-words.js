/* eslint-disable no-unused-vars */

// create variable with empty array
// check if string has more than one word
// -- if so, push words into empty array with a comma
// -- if not, push the word into the empty array

function getWords(string) {
  let result = [];
  if (string.includes(' ')) {
    result = string.split(' ');
    return result;
  } else if (!string.length) {
    return string.split('');
  } else {
    result.push(string);
    return result;
    // return string.split('');
  }
}
