import { HeaderStyle } from "./style"
import logo from "../../../public/images/pokedex-3d-logo.png"
import { useContext } from "react"
import { ThemeContext, ThemeContextType } from "../../context";

export default function Header (){
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <HeaderStyle theme={theme}>
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