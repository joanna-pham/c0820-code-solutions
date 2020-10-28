/* eslint-disable no-console */

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log('Users:', data));

fetch('https://pokeapi.co/api/v2/pokemon/espeon')
  .then(res => res.json())
  .then(data => console.log('Espeon:', data));
