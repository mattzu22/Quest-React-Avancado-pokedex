import React, { createContext, useState } from "react";

export interface Theme {
  bg: string;
  bgCard: string;
  bgMode: string;
  color: string;
  colorMode: string;
  colorPokebola: string;
}
interface ThemeContext {
  dark: Theme;
  light: Theme;
}

export const themes: ThemeContext = {
  dark: {
    bg: "#313131",
    bgCard: "rgba(0, 0, 0, 0.773), rgba(0, 0, 0, 0.592)",
    bgMode: "#ffffff",
    color: "#ffffff",
    colorMode: "#000000",
    colorPokebola:"invert(0)",
  },
  light: {
    bg: "#ffffff",
    bgCard: "rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)",
    bgMode: "#000000",
    colorMode: "#ffffff",
    color: "#000000",
    colorPokebola:"invert(100%)",
  },
};

export interface ThemeContextType{
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = (props: any) =>{
    const [theme, setTheme] = useState<Theme>(themes.dark)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
