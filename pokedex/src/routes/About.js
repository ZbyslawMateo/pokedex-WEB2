import React from 'react';
import '../styles/style.css';

export default function About() {
  return (
    <div className="container about-section">
      <h1>PokeAPI</h1>
    <p>PokeAPI is a free, open-source RESTful API that provides information on Pokémon species, their moves, abilities, and more. The data is sourced from various locations, including the official games, Pokémon TV show, and trading card game.</p>
      <h2>Features</h2>
<ul>
  <li>Access to data on all Pokémon species, including their moves, abilities, types, stats, and more.</li>
  <li>Information on moves, abilities, items, locations, and more.</li>
  <li>Ability to search and filter data by various parameters, including name, ID, type, and more.</li>
  <li>Support for multiple languages, including English, Japanese, French, German, Italian, and Spanish.</li>
  <li>Ability to retrieve data in various formats, including JSON and CSV.</li>
</ul>

<h2>Usage</h2>
<p>To use PokeAPI, you can send HTTP requests to the API's endpoints, which will return data in the requested format. For example, to retrieve information on a specific Pokémon species, you can send a GET request to the following endpoint:</p>

<code>https://pokeapi.co/api/v2/pokemon/pikachu</code>

<p>For more information on how to use PokeAPI and its various endpoints, you can refer to the <a href="https://pokeapi.co/docs/v2.html">official documentation</a>.</p>

<h2>Examples</h2>
<p>Here are some examples of the type of data you can retrieve using PokeAPI:</p>

<h3>Retrieving Information on a Pokémon Species</h3>
<p>To retrieve information on a specific Pokémon species, you can send a GET request to the following endpoint:</p>
<p>For example, to retrieve information on Pikachu, you can send a GET request to:</p>
<code>https://pokeapi.co/api/v2/pokemon/pikachu</code>

<h3>Retrieving Information on a Move</h3>
<p>To retrieve information on a specific move, you can send a GET request to the following endpoint:</p>
<p>For example, to retrieve information on the move "Thunderbolt", you can send a GET request to:</p>
<code>https://pokeapi.co/api/v2/move/thunderbolt</code>
    </div>
  )
}
