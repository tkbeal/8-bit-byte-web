import { createContext } from "react";
import { ThemeAction, ThemeState } from "./types";
import { initialState } from "./state";

type Context = {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<Context>({
  state: initialState,
  dispatch: () => null,
});
