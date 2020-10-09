/* eslint-disable no-console */

let count = 3;

const counter = setInterval(function () {
  console.log(count);
  count--;
  if (count === 0) {
    console.log(count);
    console.log('Blast off!');
    clearInterval(counter);
  }
}, 1000);
