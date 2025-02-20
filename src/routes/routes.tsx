import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonsDetails } from "../pages/CardPokemonDetails";
import { CardsPokemons } from "../pages/CardsPokemons";
// import { DefautlLayout } from "../layouts/DefaultLayout.tsx";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<DefautlLayout />}> */}
          <Route path="/pokemon/:pokemon" element={<PokemonsDetails />} />
          <Route path="/" element={<CardsPokemons />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
