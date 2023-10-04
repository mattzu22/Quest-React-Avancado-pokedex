import { HeaderStyle } from "./style";
import logo from "../../../public/images/pokedex-3d-logo.png";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../context";
import { useState } from "react";

export default function Header({ setDetailsPokemons, showColorPokemon }: any) {
  const [searchFilteredPokemon, setSearchFilteredPokemon] = useState("");

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const showFilteredPokemonInput = async () => {
    const pokemon = searchFilteredPokemon;
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const dataPokemon = await url.json();

    const types: string[] = dataPokemon.types.map(
      (type: { type: { name: string } }) => type.type.name
    );

    const colorPokemon = showColorPokemon(types.join("-"));

    const detailFilteredPokemon = [
      {
        name: dataPokemon.name,
        image: dataPokemon.sprites.front_default,
        types: types,
        colorPokemon: colorPokemon,
      },
    ];

    setDetailsPokemons(detailFilteredPokemon);
  };

  function showPokemonFiltered(event: any) {
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
          onChange={showPokemonFiltered}
          value={searchFilteredPokemon}
        />

        <button onClick={showFilteredPokemonInput}>🔎</button>
      </form>
    </HeaderStyle>
  );
}
