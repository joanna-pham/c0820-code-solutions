/* eslint-disable no-unused-vars */

function omit(source, keys) {
  const result = {};

  for (const prop in source) {
    let includes = false;
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        includes = true;
        break;
      }
    }
    if (!includes) {
      result[prop] = source[prop];
    }
  }
  return result;
}
