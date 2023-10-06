import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemon } from "../pages/pokemon.tsx";
import { Pokemons }  from "../pages/CardsPokemons.tsx";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
        <Route path="/" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  );
};

