import { useState } from "react";
import { Button } from "./style";

export const MorePokemons = ({ fetchPokemonsList }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const limit: number = 10;

  const fetchMorePokemons = () => {
    const newOffset = offset + limit;
    setLoading(true);
    setTimeout(() => {
      fetchPokemonsList(newOffset);
      setOffset(newOffset);
      setLoading(false);
    }, 1000);
  };

  return (
    <Button
      className={loading ? "button button-loading" : "button"}
      onClick={fetchMorePokemons}
    >
      <span className="button-text">Carregar Mais</span>
    </Button>
  );
};
