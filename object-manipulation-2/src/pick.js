/* eslint-disable no-unused-vars */

function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]]) {
      console.log('source[keys[i]]', source[keys[i]]);
      console.log('keys[i]', keys[i]);
      result[keys[i]] = source[keys[i]];
      // console.log
    }
  }
  return result;
}

// prop --> key
// source[prop] --> value
