import { useState } from "react";
import { ButtonMorePokemons } from "./style";

export const MorePokemons = ({ fetchPokemonsList, detailsPokemons }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const limit: number = 10;

  const pokemonLength = detailsPokemons.length == 1

  const fetchMorePokemons = () => {
    const newOffset = offset + limit;
    setLoading(true);
    setTimeout(() => {
      fetchPokemonsList(newOffset);
      setOffset(newOffset);
      setLoading(false);
    }, 1500);
  };

  return (
    <ButtonMorePokemons>
      <button
        className={loading ? "button button-loading" : "button"}
        onClick={fetchMorePokemons}
        disabled={loading ? true : false || pokemonLength ? true : false}
      >
        <span className="button-text">Carregar Mais</span>
      </button>
    </ButtonMorePokemons>
  );
};
