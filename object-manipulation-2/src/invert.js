/* eslint-disable no-unused-vars */

function invert(source) {
  const result = {};
  for (const prop in source) {
    result[source[prop]] = prop;
  }
  return result;
}

// result[value] = key

// key and value
// key = key value = value
// invert key = value value = key
