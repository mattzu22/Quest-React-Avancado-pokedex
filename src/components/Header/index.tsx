import { HeaderStyle } from "./style";
import logo from "../../../public/images/pokedex-3d-logo.png";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../context";
import { useState } from "react";

export default function Header({ setDetailsPokemons, getPokemonsInfo }: any) {
  const [searchFilteredPokemon, setSearchFilteredPokemon] = useState("");

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const showFilteredPokemonInput = async () => {
    const pokemon = searchFilteredPokemon;
    const detailFilteredPokemon = await getPokemonsInfo(pokemon);

    setDetailsPokemons([detailFilteredPokemon]);
  };

  function showPokemonFiltered(event: any) {
    event?.preventDefault();

    setSearchFilteredPokemon(event.target.value);
    setSearchFilteredPokemon("");
  }

  function handleInputValue(event: any) {
    event?.preventDefault();

    setSearchFilteredPokemon(event.target.value);
  }

  return (
    <HeaderStyle theme={theme}>
      <img src={logo} alt="logo" />

      <form className="search" onSubmit={showPokemonFiltered}>
        <input
          type="text"
          placeholder="Digite o nome do pokemon"
          id="search-pokemon"
          name="name-pokemon"
          onChange={handleInputValue}
          value={searchFilteredPokemon}
        />

        <button onClick={showFilteredPokemonInput}>🔎</button>
      </form>
    </HeaderStyle>
  );
}
