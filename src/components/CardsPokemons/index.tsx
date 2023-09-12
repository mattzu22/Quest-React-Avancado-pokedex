import CardPokemon from "../CardPokemon";
import { CardsPokemonsStyle } from "./style";
import { useState, useEffect } from "react";
interface DetailsPokemonsProps {
  name: string;
  image: string;
  types: string[];
  bgCard: string;
  colorType: string;
}

interface PropsCardsPokemons {
  showColorPokemon: (type: string) => string;
}

export default function CardsPokemons({showColorPokemon}: PropsCardsPokemons) {
  const [detailsPokemons, setDetailsPokemons] = useState<DetailsPokemonsProps[]>([]);

  const limit: number = 10;
  let offset: number = 0;

  // const fetchMorePokemons = ()=>{
  //   offset += limit
  //   return fetchPokemonsList(offset)
  // }

  const fetchPokemonsList = async () => {
    offset += limit
    
    try {
      const urlBase: string = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response: Response = await fetch(urlBase);
      const json = await response.json();
      const { results } = json;

      const pokemonDetails: DetailsPokemonsProps[] = await Promise.all(
        results.map((data: { url: string }) => getPokemonsInfo(data.url))
      );

      // setDetailsPokemons(pokemonDetails);
      setDetailsPokemons((prevDetails) => [...prevDetails, ...pokemonDetails]);
      
    } catch (error) {
      console.error("Erro ao buscar os Pokémon:", error);
    }
  };

  async function getPokemonsInfo(data: string): Promise<DetailsPokemonsProps> {
    const detailsPokemons = await fetch(data);

    const pokemons = await detailsPokemons.json();
    const types: string[] = pokemons.types.map(
      (type: { type: { name: string } }) => type.type.name
    );
    const bgCard = showColorPokemon(types.join("-"));
    const colorType = showColorPokemon(types.join("-"));

    return {
      name: pokemons.name,
      image: pokemons.sprites.front_default,
      types: types,
      bgCard: bgCard,
      colorType: colorType,
    };
  }

  useEffect(() => {
    fetchPokemonsList();
  }, []);

  return (
    <CardsPokemonsStyle>
      <CardPokemon detailsPokemons={detailsPokemons} />
      <button type="button" className="button" id="btn" onClick={fetchPokemonsList}>
        <span className="button__text">Carregar Mais</span>
      </button>
    </CardsPokemonsStyle>
  );
}
