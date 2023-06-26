import { useContext } from "react";
import { ThemeContext } from "../theme/context";
import { Theme } from "../theme";

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  const setTheme = (newTheme: Theme) => {
    themeContext.dispatch({ theme: newTheme });
  };

  return {
    theme: themeContext.state.theme,
    setTheme,
  };
};
