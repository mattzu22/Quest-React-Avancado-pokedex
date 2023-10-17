import { useState, useEffect } from "react";

import { fetchPokemonsList } from "../../services/api";

import { CardsPokemonsStyle } from "./style";

import { DetailsPokemonsProps } from "../../interfaces/config";

import { MorePokemons } from "../MorePokemons";
import { CardPokemon } from "../CardPokemon";
import { Header } from "../Header";

export function CardsPokemons() {
  const [detailsPokemons, setDetailsPokemons] = useState<DetailsPokemonsProps[]>([]);

  const getDetailsPokemon = async (offset: number)=>{
    const pokemonData = await fetchPokemonsList(offset)
     
    setDetailsPokemons([...detailsPokemons, ...pokemonData!])
  }

  useEffect(() => {
   getDetailsPokemon(0)
  }, []);

  return (
    <CardsPokemonsStyle>
      <Header setDetailsPokemons={setDetailsPokemons}/>

      {detailsPokemons.map((pokemon) => {
        return (
          <CardPokemon
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            colorPokemon={pokemon.colorPokemon}
            key={pokemon.name}
          />
        );
      })}

      <MorePokemons 
       getDetailsPokemon={getDetailsPokemon}
       detailsPokemons={detailsPokemons}
      />
    </CardsPokemonsStyle>
  );
}
