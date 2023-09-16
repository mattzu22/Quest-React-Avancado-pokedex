import { ThemeContext, ThemeContextType } from "./context";
import { ThemeContextProvider } from "./context"
import { CSSreset } from "./CSSReset";
import CardsPokemons from "./components/CardsPokemons";
import Header from "./components/Header";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeTogglerButton } from "./components/theme-toggler";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";

type BgCardPokemons = Record<string, string>;

const bgCardPokemon: BgCardPokemons = {
  fire: "#fd7d24",
  grass: "#9bcc50",
  water: "#4592c4",
  bug: "#d0c240f4",
  normal: "#a4acaf",
  poison: "#b97fc9",
  flying: "#3dc7ef",
  ground: "#f7de3f",
  electric: "#eed535",
  fairy: "#fdb9e9",
  fighting: "#d56723",
  psychic: "#f366b9",
  ice: "#51c4e7",
  steel: "#b5bbb5",
  rock: "#919c91",
  "water-poison": `linear-gradient(
    90deg,
    #4592c4 25%,
    #b97fc9 60%
  )`,
  "water-fighting": `linear-gradient(
    90deg,
    #4592c4 25%,
    #d56723 60%
  )`,
  "normal-fairy": `linear-gradient(
    90deg,
    #a4acaf 25%,
    #fdb9e9 60%
  )`,
  "poison-flying": `linear-gradient(
    90deg,
    #b97fc9 22%,
    #3dc7ef 100%
  )`,
  "poison-ground": `linear-gradient(
    100deg,
    #b97fc9 25%,
    #f7de3f 60%
  )`,
  "grass-poison": `linear-gradient(
    90deg,
    #9bcc50 35%,
    #b97fc9 100%
  )`,
  "fire-flying": `linear-gradient(
    90deg,
    #3dc7ef 35%,
    #fd7d24 100%
  )`,
  "bug-flying": `linear-gradient(
    90deg,
    #d0c240f4 35%,
    #bb8e07f4 100%
  )`,
  "normal-flying": `linear-gradient(
    90deg,
    #a4acaf 35%,
    #3dc7ef 83%
  )`,
  "bug-poison": `linear-gradient(
    90deg,
    #d0c240f4 15%,
    #b97fc9 100%
  )`,
  "bug-grass": `linear-gradient(
    90deg,
    #d0c240f4 25%,
    #9bcc50 80%
  )`,
  "water-psychic": `linear-gradient(
    90deg,
    #4592c4 25%,
    #f366b9 60%
  )`,
  "rock-ground": `linear-gradient(
    90deg,
    #a38c21 25%,
    #f7de3f 60%
  )`,
  "electric-steel": `linear-gradient(
    90deg,
    #eed535 25%,
    #b5bbb5 60%
  )`,
  "ghost-poison": `linear-gradient(
    90deg,
    #b97fc9 25%,
    #7b62a3 60%
  )`,
  "grass-psychic": `linear-gradient(
    90deg,
    #9bcc50 25%,
    #f366b9 60%
  )`,
  "ice-psychic": `linear-gradient(
    90deg,
    #51c4e7 25%,
    #f366b9 60%
  )`,
  "water-flying": `linear-gradient(
    90deg,
    #4592c4 25%,
    #3dc7ef 60%
  )`,
  "water-ice": `linear-gradient(
    90deg,
    #4592c4 25%,
    #51c4e7 60%
  )`,
  "ground-rock": `linear-gradient(
    90deg,
    #f7de3f 25%,
    #919c91 60%
  )`,
};

const showColorPokemon = (type: string): string => {
  return bgCardPokemon[type];
};

function App() {
  return (
  <ThemeContextProvider> 
    <ThemeProvider theme={bgCardPokemon}>
        <CSSreset />
        <Header />
        <ThemeTogglerButton />
        <CardsPokemons showColorPokemon={showColorPokemon} />
    </ThemeProvider>
  </ThemeContextProvider> 
  );
}

export default App;
