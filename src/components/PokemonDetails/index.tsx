import image from "../../../public/images/bg-pokemon.jpg";
import { StyleCardPokemon } from "./style";
import { showColorPokemon } from "../../App"
import { useParams } from "react-router-dom"; 

async function getDataPokemon(pokemon:string) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(url)
  return await response.json()
}

console.log(await getDataPokemon("pikachu"));


export function PokemonsDetails() {
  const { pokemon } = useParams()

  return (
    <StyleCardPokemon>
      <div className="container-card-pokemon">
        <div className="info-pokemon-top">
          <div className="name-type">
            <h2 className="name">Pikachu</h2>
            <div className="types">
              <span className="type">Eletric</span>`;
            </div>
          </div>
          <p className="number">#02</p>

          <button className="btn-shiny"></button>
        </div>

        <div className="info-bottom">
          <img src={image} className="img-pokemon" />

          <div className="poke-details">
            <nav className="navegation">
              <ul className="menu">
                <li className="selecionado" id="0">
                  Status
                </li>
                <li id="1">Moves</li>
                <li id="2">Abilities</li>
              </ul>
            </nav>

            <div className="info">
              <div className="status info-poke aberto" id="info-0">
                <h3>Status</h3>

                <ul className="info-status">
                  <li>hp: 44</li>
                  <li>hp: 44</li>
                  <li>hp: 44</li>
                  <li>hp: 44</li>
                  <li>hp: 44</li>
                </ul>
              </div>

              <div className="moves info-poke" id="info-1">
                <h3>Moves</h3>

                <ul>
                  <li>hp: 44</li>
                  <li>hp: 44</li>
                  <li>hp: 44</li>
                </ul>
              </div>

              <div className="abilities info-poke" id="info-2">
                <h3>Abilities</h3>

                <ul>
                  <li>hp: 44</li>
                  <li>hp: 44</li>
                  <li>hp: 44</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </StyleCardPokemon>
  );
}
