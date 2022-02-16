// estas funciones son de ejemplo
import data from "./data/pokemon/pokemon.js";

import {
  renderPokemonCard
}

  from "./components.js";

export const example = () => {
  return "example";
}

  ;

export const anotherExample = () => {
  return "OMG";
}

  ;

export const renderListOfPokemon = () => {
  const pokemonList = document.getElementById("pokemon-list");
  const pokemon = data.pokemon;

  const pokemonListHTML = pokemon.map((pokemon) => {
    const pokemonCardHTML = renderPokemonCard(pokemon);
    return pokemonCardHTML;
  }

  ).join("\n");
  pokemonList.innerHTML = pokemonListHTML;
}

  ;

export const getPokemonByNum = (num) => {
  return data.pokemon.find((pokemon) => {
    return pokemon.num === num;
  }

  );
}

  ;