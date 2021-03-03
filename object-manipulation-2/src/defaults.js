/* eslint-disable no-unused-vars */

function defaults(target, source) {
  for (const prop in source) {
    if (typeof target[prop] === 'undefined') {
      target[prop] = source[prop];
    }
  }
}
