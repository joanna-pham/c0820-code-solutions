/* eslint-disable no-unused-vars */

function getValues(object) {
  const result = [];
  for (const key in object) {
    const value = object[key];
    result.push(value);
  }
  return result;
}
