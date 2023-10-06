import { useState, useContext, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./style"
import { ThemeContext } from "../../context";
import { ThemeContextType } from "../../context";
import { getPokemonsInfo } from "../../services/api"

export const Search = ({setDetailsPokemons, getDetailsPokemon}: any) => {
  const [searchFilteredPokemon, setSearchFilteredPokemon] = useState("");

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const { pokemon } = useParams();

  const showFilteredPokemonInput = async () => {
    const pokemon = searchFilteredPokemon;
    const detailFilteredPokemon = await getPokemonsInfo(pokemon);

    setDetailsPokemons([detailFilteredPokemon]);
  };

  async function showCardPokemonDetailsFiltered() {
    const pokemon = searchFilteredPokemon;
    await getDetailsPokemon(pokemon);
  }

  function showPokemonFiltered(event: ChangeEvent<HTMLFormElement>) {
    event?.preventDefault();

    setSearchFilteredPokemon(event.target.value);
    setSearchFilteredPokemon("");
  }

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    event?.preventDefault();

    setSearchFilteredPokemon(event.target.value);
  }

  function cardPokemon() {
    if (pokemon) {
      showCardPokemonDetailsFiltered();
    } else {
      showFilteredPokemonInput();
    }
  }
  return (
    <Styled.Search className="search" onSubmit={showPokemonFiltered} theme={theme}>
      <input
        type="text"
        placeholder="Digite o nome do pokemon"
        id="search-pokemon"
        name="name-pokemon"
        onChange={handleInputValue}
        value={searchFilteredPokemon}
      />

      <button onClick={cardPokemon}>🔎</button>
    </Styled.Search>
  );
};
