import CardPokemon from "../CardPokemon";
import { CardsPokemonsStyle } from "./style";
import { useState, useEffect } from "react";
import { showColorPokemon } from "../../App";
import Header from "../Header";
import { MorePokemons } from "../MorePokemons";

interface DetailsPokemonsProps {
  name: string;
  image: string;
  types: string[];
  colorPokemon: string;
}

export function CardsPokemons() {
  const [detailsPokemons, setDetailsPokemons] = useState<DetailsPokemonsProps[]>([]);
  
  const fetchPokemonsList = async (offset: number) => {
    try {
      const urlBase: string = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
      const response: Response = await fetch(urlBase);
      const json = await response.json();
      const { results } = json;

      const pokemonDetails: DetailsPokemonsProps[] = await Promise.all(
        results.map((data: { name: string }) => getPokemonsInfo(data.name))
      );

      const listPokemons = (prevDetails: DetailsPokemonsProps[]) => {
        if (offset === 0) {
          return pokemonDetails;
        } else {
          return [...prevDetails, ...pokemonDetails];
        }
      };

      setDetailsPokemons(listPokemons);
    } catch (error) {
      console.error("Erro ao buscar os Pokémon:", error);
    }
  };

  async function getPokemonsInfo(pokemon: string) {
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

  useEffect(() => {
    fetchPokemonsList(0);
  }, []);

  return (
    <CardsPokemonsStyle>
      <Header
        setDetailsPokemons={setDetailsPokemons}
        showColorPokemon={showColorPokemon}
        getPokemonsInfo={getPokemonsInfo}
      />

      {detailsPokemons.map((pokemon) => {
        return (
          <CardPokemon
            name={pokemon.name}
            img={pokemon.image}
            types={pokemon.types}
            colorPokemon={pokemon.colorPokemon}
            key={pokemon.name}
          />
        );
      })}

      <MorePokemons fetchPokemonsList={fetchPokemonsList} detailsPokemons={detailsPokemons}/>
    </CardsPokemonsStyle>
  );
}
