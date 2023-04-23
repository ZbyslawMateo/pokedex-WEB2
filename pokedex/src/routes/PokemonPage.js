import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/pokemonpage.css';

export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
      setPokemonData(res.data);
      setLoading(false);
    }).catch(err => console.log(err));
  }, [id]);

  if (loading) return "Loading...";

  const { name, id: pokemonId, weight, height, sprites, types, stats, abilities } = pokemonData;

  return (
    <div className="pokemon-page-container">
      <h1 className="pokemon-name">{name}</h1>
    <div className="pokemon-details-container">
      <div className="pokemon-image-container">
        <img src={sprites.other.dream_world.front_default} alt={name} />
      </div>
        <div className="stats-container">
          <h3>Stats</h3>
          <ul>
            {stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="abilities-container">
          <h2>Abilities</h2>
          <ul>
            {abilities.map(ability => (
              <li key={ability.ability.name}>
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="overall-info-container">
          <h2>Overall Info</h2>
          <ul>
            <li>ID: {pokemonId}</li>
            <li>Weight: {weight}</li>
            <li>Height: {height}</li>
            <li>Type: {types.map(type => type.type.name).join(', ')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}