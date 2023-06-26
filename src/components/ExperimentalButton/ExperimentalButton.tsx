import React, { useEffect, useState } from "react";
import { useTheme } from "../../global_state/hooks";
import { Theme } from "../../global_state/theme";
import styled from "styled-components";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

export const ExperimentalButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (_theme: Theme) => {
    if (_theme === Theme.gradient) {
      setTheme(Theme.neobrutalism);
    } else {
      setTheme(Theme.gradient);
    }
  };

  const getColor = (theme: Theme) => {
    if (theme === Theme.gradient) {
      return "#fff";
    } else {
      return "#90ee90";
    }
  };

  return (
    <ThemeButton theme={theme} onClick={() => toggleTheme(theme)}>
      <FA icon={faFlask} size={"2x"} color={getColor(theme)} />
    </ThemeButton>
  );
};

const ThemeButton = styled.button<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 40px;
  aspect-ratio: 1;
  border: none;
  z-index: 10;
  background-color: transparent;

  ${({ theme }) =>
    theme === Theme.neobrutalism &&
    `border: 2px solid black; border-radius: 4px; background-color: white;`}

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
