import CardPokemon from "../CardPokemon";
import { CardsPokemonsStyle } from "./style";
import { useState, useEffect } from "react";
interface DetailsPokemonsProps {
  name: string;
  image: string;
  types: string[];
}

export default function CardsPokemons() {
const [detailsPokemons, setDetailsPokemons] = useState<DetailsPokemonsProps[]>([]);

  const fetchPokemonsList = async () => {
    try {
      const urlBase: string = "https://pokeapi.co/api/v2/pokemon?limit=10";
      const response: Response = await fetch(urlBase);
      const json = await response.json();
      const { results } = json;

      const pokemonDetails: DetailsPokemonsProps[] = await Promise.all(
        results.map((data: {url:string}) => getPokemonsInfo(data.url)
        
      ));

      setDetailsPokemons(pokemonDetails);
    } catch (error) {
      console.error("Erro ao buscar os Pokémon:", error);
    }
  };

async function getPokemonsInfo(data: string): Promise<DetailsPokemonsProps> {
  const detailsPokemons = await fetch(data);

  const pokemons = await detailsPokemons.json();
  const types: string[] = pokemons.types.map((type: {type: {name: string}}) => type.type.name);

  return {
    name: pokemons.name,
    image: pokemons.sprites.front_default,
    types: types,
  };
}

useEffect(() => {
  fetchPokemonsList();
}, []);

return (
  <CardsPokemonsStyle>
    <CardPokemon detailsPokemons={detailsPokemons} />
  </CardsPokemonsStyle>
);
}

