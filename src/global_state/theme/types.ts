export enum Theme {
  "gradient",
  "neobrutalism",
}

export type ThemeState = {
  theme: Theme;
};

export type ThemeAction = {
  theme: Theme;
};
