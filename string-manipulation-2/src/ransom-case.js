/* eslint-disable no-unused-vars */

function ransomCase(string) {
  let result = '';
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string.charAt(i).toLowerCase();
    } else {
      result += string.charAt(i).toUpperCase();
    }
  }
  return result;
}
