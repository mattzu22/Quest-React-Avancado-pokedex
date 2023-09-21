import { useContext } from "react";
import { ThemeContext, ThemeContextType, themes } from "../../context";
import ThemeToggler from "../Button";
import { StyleDiv } from "./style";
import { CiSun } from "react-icons/Ci";
import { GrMoon } from "react-icons/Gr";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <StyleDiv theme={theme}>
      <ThemeToggler
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
        className="btn"
        style={{ background: "tranparent", outline: "none" }}
      >
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label for="checkbox" className="checkbox-label">
          <CiSun style={{ color: "white" }} />
          <GrMoon style={{ color: "white" }} />
          <span className="ball"></span>
        </label>
      </ThemeToggler>
    </StyleDiv>
  );
};
