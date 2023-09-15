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
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState(false)

  const limit: number = 10;

  const fetchMorePokemons = () => {
    const newOffset = offset + limit;
    setLoading(true);
    setTimeout(() => {
      fetchPokemonsList(newOffset);
      setOffset(newOffset);
      setLoading(false)
    }, 2000);
  };

  const fetchPokemonsList = async (offset: number) => {
    try {
      const urlBase: string = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response: Response = await fetch(urlBase);
      const json = await response.json();
      const { results } = json;

      const pokemonDetails: DetailsPokemonsProps[] = await Promise.all(
        results.map((data: { url: string }) => getPokemonsInfo(data.url))
      );

      const listPokemons = (prevDetails: DetailsPokemonsProps[]) =>{
        if (offset === 0) {
          return pokemonDetails;
        } else {
          return [...prevDetails, ...pokemonDetails];
        }
      }

      setDetailsPokemons(listPokemons);
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
      fetchPokemonsList(offset);
  }, []);

  return (
    <CardsPokemonsStyle>
      <CardPokemon detailsPokemons={detailsPokemons} />

      {
        loading ? (
      <button
        type="button"
        className="button button-loading"
        id="btn"
        onClick={fetchMorePokemons}
      >
        <span className="button-text">Carregar Mais</span>
      </button>
        ): 
        ( <button
          type="button"
          className="button"
          id="btn"
          onClick={fetchMorePokemons}
        >
          <span className="button-text">Carregar Mais</span>
        </button>)
      }
    </CardsPokemonsStyle>
  );
}
