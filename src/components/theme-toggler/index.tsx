import * as Styled from "./style";

import { useContext } from "react";

import { ThemeContext, ThemeContextType, themes } from "../../context";

import { CiSun } from "react-icons/ci";
import { HiOutlineMoon } from "react-icons/hi"


export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <Styled.StyleDiv theme={theme}>
      <button className="btn">
        <input type="checkbox" className="checkbox" id="checkbox" onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }/>
        <label htmlFor="checkbox" className="checkbox-label">
          <CiSun className="fa-sun" />
          <HiOutlineMoon className="fa-moon" />
          <span className="ball"></span>
        </label>
      </button>
    </Styled.StyleDiv>
  );
};
