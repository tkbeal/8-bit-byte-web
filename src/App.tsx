import React, { CSSProperties } from "react";
import { Footer } from "./components/Footer";
import { HobbyLinks } from "./components/HobbyLinks";
import { About } from "./components/About";
import "./App.css";
import { GoDown } from "./components/GoDown";
import { styled } from "styled-components";
import { Hero } from "./components/Hero";
import { Constants } from "./utils";

const App = () => {
  return (
    <main style={styles.main}>
      <HeroContainer>
        <HobbyLinks />
        <Hero />
      </HeroContainer>
      <GoDown />
      <About />
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;

const styles = {
  main: {
    position: "relative",
    flexFlow: "column nowrap",
    display: "flex",
  } as CSSProperties,
  first: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 50,
  },
  second: {
    display: "flex",
    alignItems: "center",
  },
};

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
