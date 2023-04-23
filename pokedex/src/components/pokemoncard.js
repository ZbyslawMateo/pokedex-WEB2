import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/components.css'

export default function PokemonCard({ pokemon }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(pokemon.url).then(res => {
      setPokemonData(res.data);
      setLoading(false);
    }).catch(err => console.log(err));
  }, [pokemon.url]);

  if (loading) return "Loading...";

  return (
    <Link to={`/pokemon/${pokemonData.id}`} className="pokemon-card-link">
    <div className="pokemon-card">
      <div className="pokemon-card-header">
        <h3>{`${pokemonData.id}. ${pokemon.name}`}</h3>
      </div>
      <div className="pokemon-card-body">
        <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemon.name} className="pokemon-card-image" />
      </div>
    </div>
    </Link>
  );
}