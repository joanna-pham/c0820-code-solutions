/* eslint-disable no-console */

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = parseFloat(process.argv[2]);
const operation = process.argv[3];
const y = parseFloat(process.argv[4]);

switch (operation) {
  case 'plus':
    console.log('results:', add(x, y));
    break;
  case 'minus':
    console.log('results:', subtract(x, y));
    break;
  case 'times':
    console.log('results:', multiply(x, y));
    break;
  case 'over':
    console.log('results:', divide(x, y));
    break;
  default:
    console.log('invalid operation');
}
