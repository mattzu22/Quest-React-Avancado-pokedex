import * as Styled from "./style";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { ThemeContext, ThemeContextType } from "../../context";

import { getPokemonsInfo } from "../../services/api"

import { Header } from "../Header";

import { AiOutlineRollback } from "react-icons/ai"

interface DetailsPokemonProps {
  name: string;
  types: string[];
  stats: {
    nameStats: string;
    baseStats: string;
  }[];
  image: string;
  id: string;
  moves: {
    move: {name: string};
    name: string;
    url: string;
  }[];
  abilities: {
    nameAbility: string;
    effect: { effect: string }[];
  }[];
}

export function PokemonsDetails() {
  const [detailsPokemon, setDetailsPokemon] = useState<DetailsPokemonProps| undefined>(undefined);
  const [showMenu, setShowMenu] = useState<string>("status");

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const { pokemon } = useParams();

  const stringTypes = detailsPokemon?.types ? detailsPokemon?.types.join("-") : ""

  async function getDetailsPokemon(pokemon: string | undefined){
    const dataPokemon = await getPokemonsInfo(pokemon)

    setDetailsPokemon(dataPokemon)
  }

  useEffect(() => {
    getDetailsPokemon(pokemon);
  }, []);

  return (
    <>
      <Header 
       getDetailsPokemon={getDetailsPokemon}
      />

      <Styled.CardPokemon  types={stringTypes}>
        <Link className="back" to={`/`}>
          <AiOutlineRollback className="back-icon"/>
        </Link>
        
        <div
          className="container-card-pokemon"
        >
          <Styled.InfoPokemonTop 
           theme={theme}
            types={stringTypes}
          >
            <div className="name-type">
              <h2 className="name">{detailsPokemon?.name}</h2>
              <div className="types">
                {detailsPokemon?.types.map((type) => (
                  <span
                    className="type"
                    key={type}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <p className="number">#0{detailsPokemon?.id}</p>

            <button className="btn-shiny"></button>
          </Styled.InfoPokemonTop>

          <Styled.InfoPokemonBottom theme={theme}>
            <div className="img-pokemon">
              <img src={detailsPokemon?.image} />
            </div>

            <Styled.PokeDetails theme={theme}>
              <Styled.Navegation>
                <ul>
                  <li
                    className={showMenu == "status" ? "selecionado" : ""}
                    onClick={() => setShowMenu("status")}
                  >
                    Status
                  </li>
                  <li
                    className={showMenu == "moves" ? "selecionado" : ""}
                    onClick={() => setShowMenu("moves")}
                  >
                    Moves
                  </li>
                  <li
                    className={showMenu == "abilities" ? "selecionado" : ""}
                    onClick={() => setShowMenu("abilities")}
                  >
                    Abilities
                  </li>
                </ul>
              </Styled.Navegation>

              <Styled.InfoPokemon>
                {showMenu == "status" ? (
                  <div className="info-poke">
                    <h3>Status</h3>

                    <ul className="info-status">
                      {detailsPokemon?.stats.map((stat) => {
                        return (
                          <li key={stat.nameStats}>
                            {stat.nameStats}: {stat.baseStats}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}

                {showMenu == "moves" ? (
                  <div className="info-poke">
                    <h3>Moves</h3>

                    <ul>
                      {detailsPokemon?.moves.map((move) => (
                        <li key={move.move.name}>{move.move.name}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {showMenu == "abilities" ? (
                  <div className="abilities info-poke">
                    <h3>Abilities</h3>

                    <ul>
                      {detailsPokemon?.abilities.map((ability) => (
                        <li key={ability.nameAbility}>
                          <span>{ability.nameAbility}</span>:{" "}
                          {ability.effect[0].effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Styled.InfoPokemon>
            </Styled.PokeDetails>
          </Styled.InfoPokemonBottom>
        </div>
      </Styled.CardPokemon>
    </>
  );
}
