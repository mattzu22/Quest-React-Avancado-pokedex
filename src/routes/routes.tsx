import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemon } from "../pages/pokemon.tsx";
import { Pokemons } from "../pages/CardsPokemons.tsx";
// import { DefautlLayout } from "../layouts/DefaultLayout.tsx";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<DefautlLayout />}> */}
          <Route path="/pokemon/:pokemon" element={<Pokemon />} />
          <Route path="/" element={<Pokemons />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
