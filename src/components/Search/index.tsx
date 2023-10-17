import { useState, useContext, ChangeEvent } from "react";
import { useParams } from "react-router-dom";

import * as Styled from "./style";

import { ThemeContext } from "../../context";
import { ThemeContextType } from "../../context";

import { getPokemonsInfo } from "../../services/api";

import { DetailsPokemonsProps } from "../../interfaces/config";

interface PropsSearch {
  setDetailsPokemons?: React.Dispatch<React.SetStateAction<DetailsPokemonsProps[]>>;
  getDetailsPokemon?: (pokemon: string) => void;
}

export const Search = ({setDetailsPokemons,getDetailsPokemon}: PropsSearch) => {
  const [searchFilteredPokemon, setSearchFilteredPokemon] = useState("");
  const [invalid, setInvalid] = useState("");

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const { pokemon } = useParams();

  const showFilteredPokemonInput = async () => {
    try {
      if (setDetailsPokemons) {
        const detailFilteredPokemon = await getPokemonsInfo(searchFilteredPokemon);

        if (detailFilteredPokemon) {
          setDetailsPokemons([detailFilteredPokemon]);
          setInvalid("");
        }
      }
    } catch (error: any) {
      setInvalid(`Erro ao buscar o Pokémon: ${error.message}`);
    }
  };

  async function showCardPokemonDetailsFiltered() {
    if (getDetailsPokemon) {
      getDetailsPokemon(searchFilteredPokemon);
    }
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

  function whichPokemonCardToCarry() {
    if (pokemon) {
      showCardPokemonDetailsFiltered();
    } else {
      showFilteredPokemonInput();
    }
  }
  return (
    <>
      <Styled.Search
        className={invalid ? "invalido" : ""}
        onSubmit={showPokemonFiltered}
        theme={theme}
      >
        <input
          type="text"
          placeholder="Digite o nome do pokemon"
          id="search-pokemon"
          name="name-pokemon"
          onChange={handleInputValue}
          value={searchFilteredPokemon}
        />

        <button onClick={whichPokemonCardToCarry}>🔎</button>
      </Styled.Search>
    </>
  );
};
