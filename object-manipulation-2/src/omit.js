/* eslint-disable no-unused-vars */

function omit(source, keys) {
  const result = {};
  const tempResult = {};
  for (let i = 0; i < keys.length; i++) {
    // console.log('source', source);
    console.log('keys[i]', keys[i]);
    console.log('source[keys[i]]', source[keys[i]]);
    if (keys[i] !== source[keys[i]]) {
      result[keys[i]] = source[keys[i]];
    }
    return result;
  }
}
