import React from "react";
import { Footer } from "./components/gradient/Footer";
import { HobbyLinks } from "./components/gradient/HobbyLinks";
import { About } from "./components/gradient/About";
import "./App.css";
import { GoDown } from "./components/gradient/GoDown";
import { styled } from "styled-components";
import { Hero } from "./components/gradient/Hero";
import { Constants } from "./utils";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { ExperimentalButton } from "./components/ExperimentalButton";
import { Theme } from "./global_state/theme";
import { useTheme } from "./global_state/hooks";
import { BrutalFooter } from "./components/neo-brutalism/Footer/BrutalFooter";
import { BrutalHero } from "./components/neo-brutalism/Hero";

const GradientComponents = () => (
  <GradientMain>
    <HeroContainer>
      <HobbyLinks />
      <Hero />
    </HeroContainer>
    <GoDown />
    <About />
    <Footer />
  </GradientMain>
);

const NeoBrutalComponents = () => (
  <BrutalMain>
    <BrutalHero />
    <BrutalFooter />
  </BrutalMain>
);

const ThemedBody = () => {
  const { theme } = useTheme();
  return theme === Theme.gradient ? (
    <GradientComponents />
  ) : (
    <NeoBrutalComponents />
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ExperimentalButton />
      <ThemedBody />
    </ThemeProvider>
  );
};

export default App;

const GradientMain = styled.main`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  background: linear-gradient(45deg, #000 0%, #111d38 100%);
  background-color: #000;
  padding: 18px;
`;

const BrutalMain = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #f8d6b3;
  position: relative;
  padding: 18px;
`;

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 40px;
  @media (${Constants.MOBILE_WIDTH}) {
    flex-direction: row;
    gap: 80px;
  }
`;
