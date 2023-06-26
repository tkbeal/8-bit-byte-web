import React, { PropsWithChildren, useReducer } from "react";
import { Reducers, ThemeContext, initialState } from "../../global_state/theme";

export const ThemeProvider = (props: PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(Reducers.themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
