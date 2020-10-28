/* eslint-disable no-unused-vars */

function defaults(target, source) {
  // console.log('target', target);
  // console.log('source', source);
  for (const prop in source) {
    if (typeof target[prop] === 'undefined') {
      target[prop] = source[prop];
    }
  }
}
