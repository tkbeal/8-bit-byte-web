import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import JobTitles from "./components/JobTitles";
import About from "./components/About";
import "./App.css";
import GoDown from "./components/GoDown";

const App = () => {
  return (
    <main style={styles.main}>
      <div className="hero">
        <div style={styles.first}>
          <JobTitles />
        </div>
        <div style={styles.second}>
          <Hero />
        </div>
      </div>
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
  },
  first: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
    paddingRight: 50,
  },
  second: {
    display: "flex",
    alignItems: "center",
  },
  aboutContainer: {},
};
