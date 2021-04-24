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
      <div style={styles.hero}>
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
    flexFlow: "column",
    display: "flex",
    width: "100%",
  },
  hero: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  first: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
    marginRight: 50,
  },
  second: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginLeft: 30,
  },
  aboutContainer: {},
};
