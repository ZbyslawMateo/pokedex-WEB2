import React from 'react'
import PokemonCard from '../components/pokemoncard';
import '../styles/components.css'

export default function PokemonList({ pokemon }) {
  const pokemonCards = pokemon.map(pokemonItem => (
    <PokemonCard key={pokemonItem.name} pokemon={pokemonItem} />
  ));

  return (
    <div className="pokemon-list">
      <h1 className="pokemon-app">Pokemon app</h1>
      <div className="pokemon-grid-div">
        <div className="pokemon-grid">{pokemonCards}</div>
      </div>
    </div>
  );
}