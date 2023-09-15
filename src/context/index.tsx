import React, { createContext, useState } from "react";

export interface Theme {
  bg: string;
  bgCard: string;
  bgMode: string;
  color: string;
  colorMode: string;
  mode: string;
}

interface ThemeContext {
  dark: Theme;
  light: Theme;
}

export const themes: ThemeContext = {
  dark: {
    bg: "hsl(218, 23%, 16%)",
    bgCard: "hsl(217, 19%, 24%)",
    bgMode: "#ffffff",
    color: "#ffffff",
    colorMode: "#000000",
    mode: "Light",
  },
  light: {
    bg: "#ffffff",
    bgCard: "rgb(128,128,128)",
    bgMode: "#000000",
    colorMode: "#ffffff",
    color: "#000000",
    mode: "Dark",
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
