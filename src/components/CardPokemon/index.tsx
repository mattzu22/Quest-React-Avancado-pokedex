import { CartaoPokemon } from "./style"
import pikachu from "../../../public/images/pngwing.com.png"

export default function CardPokemon(){
    return(
    <CartaoPokemon>
        <a className="card-image" href="">
         <img src={pikachu} alt="pikachu" />
        </a>

        <div className="details">
          <h2 className="name">pikachu</h2>
          <div className="types">eletric</div>
        </div>
    </CartaoPokemon> 
    )
}