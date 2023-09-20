import { StyleCardPokemon } from "./style";
import { showColorPokemon } from "../../App";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface DetailsPokemonProps {
  name: string;
  types: string[];
  stats: string[];
  image: string;
  id: string;
  moves: string[];
}

export function PokemonsDetails() {
  const [detailsPokemon, setDetailsPokemon] = useState<DetailsPokemonProps>();
  const [menu, setMenu] = useState("status");

  console.log(menu);
  

  const { pokemon } = useParams();

  async function getDataPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const json = await response.json();
    const detailsPokemon = await getDetailsPokemon(json);

    setDetailsPokemon(detailsPokemon);
  }

  async function getDetailsPokemon(dataPokemon: any) {
    const types = dataPokemon.types.map((type: any) => type.type.name);

    const infoStats = dataPokemon.stats.map((stat: any) => {
      const nameStats = stat.stat.name;
      const baseStats = stat.base_stat;
      return { nameStats, baseStats };
    });

    const { moves } = dataPokemon;
    const movesSelect = moves.slice(0, 4);

    return {
      name: dataPokemon.name,
      types: types,
      stats: infoStats,
      image: dataPokemon.sprites.front_default,
      id: dataPokemon.id,
      moves: movesSelect,
    };
  }

  const colorPokemon = showColorPokemon(detailsPokemon?.types.join("-"));

  useEffect(() => {
    getDataPokemon(pokemon);
  }, []);

  return (
    <StyleCardPokemon>
      <div className="container-card-pokemon" style={{background: colorPokemon}}>
        <div className="info-pokemon-top">
          <div className="name-type">
            <h2 className="name">{detailsPokemon?.name}</h2>
            <div className="types">
              {detailsPokemon?.types.map((type) => <span className="type" style={{background: colorPokemon}} key={type}>{type}</span>)}
            </div>
          </div>
          <p className="number">#0{detailsPokemon?.id}</p>

          <button className="btn-shiny"></button>
        </div>

        <div className="info-bottom">
          <img src={detailsPokemon?.image} className="img-pokemon" />

          <div className="poke-details">
            <nav className="navegation">
              <ul className="menu">
                <li className="selecionado" onClick={() => setMenu("status")}>
                  Status
                </li>
                <li onClick={() => setMenu("moves")}>Moves</li>
                <li onClick={() => setMenu("abilities")}>Abilities</li>
              </ul>
            </nav>

            <div className="info">
              {menu == "status" ? (
                <div className="status info-poke aberto" >
                <h3>Status</h3>

                <ul className="info-status">
                  {detailsPokemon?.stats
                    .map((stat) => {
                     return <li>{stat.nameStats}: {stat.baseStats}</li>;
                    })
                    }
                </ul>
              </div>
              ) : null
              }
              
              { menu == "moves" ? (

              <div className="moves info-poke" >
                <h3>Moves</h3>

                <ul>
                  {detailsPokemon?.moves.map((move) => <li>{move.move.name}</li>)}
                </ul>
              </div>
              ): null
              }

              {
                menu == "abilities" ? (
                  <div className="abilities info-poke" >
                  <h3>Abilities</h3>
  
                  <ul>
                    <li>hp: 44</li>
                    <li>hp: 44</li>
                    <li>hp: 44</li>
                  </ul>
                </div>
                ): null
              }
            </div>
          </div>
        </div>
      </div>
    </StyleCardPokemon>
  );
}
