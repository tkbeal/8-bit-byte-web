import { ThemeState, Theme, ThemeAction } from "./types";

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.theme) {
    case Theme.gradient:
      return { ...state, theme: Theme.gradient };
    case Theme.neobrutalism:
      return { ...state, theme: Theme.neobrutalism };
    default:
      return state;
  }
};

export const Reducers = {
  themeReducer,
};
