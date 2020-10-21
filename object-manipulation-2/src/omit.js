/* eslint-disable no-unused-vars */

// loop though keys
// if prop does not exist in keys, push source prop to result

function omit(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    console.log('prop', prop);
    console.log('source', source);
    console.log('source[prop]', source[prop]);
    if (typeof source[prop] === 'undefined') {
      result.push(source[prop]);
    }
  }
  return result;
}
