import * as Styled from "./style";

import { useState } from "react";

import { DetailsPokemonsProps } from "../../interfaces/config";
interface PropsMorePokemons {
  getDetailsPokemon: (offset: number) => void;
  detailsPokemons: DetailsPokemonsProps[];
}

export const MorePokemons = ({getDetailsPokemon, detailsPokemons}: PropsMorePokemons) => {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const pokemonsDetailsLenght = detailsPokemons.length == 1;

  const fetchMorePokemons = () => {
    const newOffset = offset + 10;
    setLoading(true);
    setTimeout(async () => {
      getDetailsPokemon(newOffset);
      setOffset(newOffset);
      setLoading(false);
    }, 1000);
  };

  return (
    <Styled.ButtonMorePokemons>
      <button
        className={loading ? "button button-loading" : "button"}
        onClick={fetchMorePokemons}
        disabled={loading ? true : false || pokemonsDetailsLenght ? true : false}
      >
        <span className="button-text">Carregar Mais</span>
      </button>
    </Styled.ButtonMorePokemons>
  );
};
