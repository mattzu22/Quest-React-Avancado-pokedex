import { useState } from "react";
import { ButtonMorePokemons } from "./style";
interface PropsMorePokemons {
  getDetailsPokemon: (offset: number) => void
}

export const MorePokemons = ({ getDetailsPokemon }: PropsMorePokemons) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const fetchMorePokemons = () => {
    const newOffset = offset + 10;
    setLoading(true);
    setTimeout(async () => {
      getDetailsPokemon(newOffset)
      setOffset(newOffset);
      setLoading(false);
    }, 1500);
  };

  return (
    <ButtonMorePokemons>
      <button
        className={loading ? "button button-loading" : "button"}
        onClick={fetchMorePokemons}
        disabled={loading ? true : false }
      >
        <span className="button-text">Carregar Mais</span>
      </button>
    </ButtonMorePokemons>
  );
};
