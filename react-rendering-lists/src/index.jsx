import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function NamePokemon(props) { // props is an object
  const listPokedex = props.pokedex.map(pokemonName =>
    <li key={pokemonName.number}>{pokemonName.name}</li>
  );
  return (
    <ul>{listPokedex}</ul>
  );
}

ReactDOM.render(
  <NamePokemon pokedex={pokedex} />, // no longer JSX
  document.querySelector('#root')
);

// in react: have elements return from a function
