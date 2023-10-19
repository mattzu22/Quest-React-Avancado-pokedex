import { ThemeContext, ThemeContextType } from "./context";
import { CSSreset } from "./global";

import { ThemeTogglerButton } from "./components/theme-toggler";

import { AppRoutes } from "./routes/routes";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <CSSreset theme={theme} />
      <ThemeTogglerButton />
      <AppRoutes />
    </>
  );
}

export default App;
