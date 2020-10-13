/* eslint-disable no-unused-vars */

function pick(source, keys) {
  const result = {};
  const tempArray = [];
  for (const prop in source) {
    for (let i = 0; i < keys.length; i++) {
      if (keys === prop) {
        tempArray.push(prop);
      }
    }
  }
  return result;
}

// prop --> key
// source[prop] --> value
