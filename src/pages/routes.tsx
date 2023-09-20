import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemon } from "./pokemon.tsx";
import { Pokemons }  from "./CardsPokemons.tsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
        <Route path="/" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
