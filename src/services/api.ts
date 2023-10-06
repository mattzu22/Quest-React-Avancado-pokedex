import { DetailsPokemonsProps } from "../interfaces/config";
import { showColorPokemon } from "../App";

export const fetchPokemonsList = async (offset: number) => {
    try {
      const urlBase: string = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
      const response: Response = await fetch(urlBase);
      const json = await response.json();
      const { results } = json;
      const pokemonsDetails =  results.map((data: { name: string }) => getPokemonsInfo(data.name))

      return await Promise.all(pokemonsDetails)
    } catch (error) {
      console.error("Erro ao buscar os Pokémon:", error);
    }
  };

  export async function getPokemonsInfo(pokemon: string) {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokemonsJson = await url.json();

    const types: string[] = pokemonsJson.types.map(
      (type: { type: { name: string } }) => type.type.name
    );

    const colorPokemon = showColorPokemon(types.join("-"));

    return {
      name: pokemonsJson.name,
      image: pokemonsJson.sprites.front_default,
      types: types,
      colorPokemon: colorPokemon,
    };
  }