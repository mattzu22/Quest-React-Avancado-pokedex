import { useContext } from "react";
import { ThemeContext, ThemeContextType, themes } from "../../context";
import  ThemeToggler  from "../Button";
import { StyleDiv } from "./style";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <StyleDiv theme={theme}>
      <ThemeToggler
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
        className="btn"
      >
        {theme.mode}
      </ThemeToggler>
    </StyleDiv>
  );
};