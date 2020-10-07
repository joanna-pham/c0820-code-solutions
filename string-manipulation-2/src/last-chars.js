/* eslint-disable no-unused-vars */

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }
  const newLength = string.length - length;
  return string.slice(newLength);
}
