import { HeaderStyle } from "./style"
import logo from "../../../public/images/pokedex-3d-logo.png"

export default function Header (){
    return (
        <HeaderStyle>
            <img src={logo} alt="logo" />

            <div className="search">
                <input type="text" placeholder="Digite o nome do pokemon" id="search-pokemon" name="name-pokemon"/>

                <button id="search">
                    🔎
                </button>
            </div>
        </HeaderStyle>
    )
}