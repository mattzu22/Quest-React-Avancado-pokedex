import CardPokemon from "../CardPokemon";
import { CardsPokemonsStyle } from "./style";
import { useState, useEffect } from "react";
import { showColorPokemon } from "../../App";
import { fetchPokemonsList } from "../../services/api";  
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

  const getDetailsPokemon = async (offset: number)=>{
    const pokemonData = await fetchPokemonsList(offset)
     
    setDetailsPokemons([...detailsPokemons, ...pokemonData!])
  }

  useEffect(() => {
   getDetailsPokemon(0)
  }, []);

  return (
    <CardsPokemonsStyle>
      <Header
        setDetailsPokemons={setDetailsPokemons}
        getDetailsPokemon={getDetailsPokemon}
        // getPokemonsInfo={getPokemonsInfo}
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

      <MorePokemons 
       getDetailsPokemon={getDetailsPokemon}
      />
    </CardsPokemonsStyle>
  );
}
