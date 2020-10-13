/* eslint-disable no-unused-vars */

function pick(source, keys) {
  const result = {};
  for (const prop in source) {
    if (keys === prop) {
      const value = source[prop];
    }
  }
  return result;
}

// prop --> key
// source[prop] --> value
