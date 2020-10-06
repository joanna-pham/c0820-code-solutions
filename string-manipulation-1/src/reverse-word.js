/* eslint-disable no-unused-vars */

function reverseWord(word) {
  let placeHolder = '';
  for (var i = word.length - 1; i >= 0; i--) {
    placeHolder += word[i];
  }
  return placeHolder;
}
