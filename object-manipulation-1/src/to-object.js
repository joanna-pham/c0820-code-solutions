/* eslint-disable no-unused-vars */

function toObject(keyValuePair) {
  const result = {};
  for (let i = 0; i < keyValuePair.length; i++) {
    result[keyValuePair[0]] = keyValuePair[1];
  }
  return result;
}
