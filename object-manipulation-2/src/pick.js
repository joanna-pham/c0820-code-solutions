/* eslint-disable no-unused-vars */

function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    if (typeof source[prop] !== 'undefined') {
      result[prop] = source[prop];
    }
  }
  return result;
}
