/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

// takeAChance('Joanna');

// let returnPromise;

const returnPromise = takeAChance('Joanna');

returnPromise.then(message => {
  console.log(message);
}).catch(message => {
  console.log(message);
});
