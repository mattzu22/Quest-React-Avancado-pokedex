import CardPokemon from "../CardPokemon";
import { CardsPokemonsStyle } from "./style";
import { useState, useEffect } from 'react';

export default function CardsPokemons() {
    const [ detailsPokemons, setDetailsPokemons ] = useState({})

  const fetchPokemonsList = async () => {
    const urlBase: string = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const response: Response = await fetch(urlBase);
    const json = await response.json();
    const { results } = json;
     await Promise.all(results.map((data) =>{
        getPokemonInfo(data)
     }))
    };
    
    async function getPokemonInfo(data){
      const url = data.url
      const detailsPokemons = await fetch(url)
      const pokemon = await detailsPokemons.json();
  
      const types: string = pokemon.types.map((type) => type.type.name)
      
      setDetailsPokemons({
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          types: types
      })
  }

  useEffect(() => {
      fetchPokemonsList()
    }, [])
    
  
  return (
    <CardsPokemonsStyle>
      <CardPokemon />
    </CardsPokemonsStyle>
  );
}
