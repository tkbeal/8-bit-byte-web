import React from "react";
import HomePage from "./components/Page/HomePage";
import Footer from "./components/Footer";
import "./App.css";
import JobTitles from "./components/JobTitles";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      hamburger: false,
      menuOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => {
      if (this.state.menuOpen) {
        console.log("app menu open");
        e.preventDefault();
      }
    });
    // Responsive Listener
    const mq = window.matchMedia("(max-width: 700px)");
    this.doWidth(mq);
    mq.addListener(this.doWidth);
  }

  doWidth = (media) => {
    if (media.matches) {
      this.setState({ hamburger: true, menuOpen: false });
    } else {
      this.setState({ hamburger: false, menuOpen: false });
    }
  };

  sideMenuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <main style={styles.main}>
        <div style={styles.hero}>
          <div style={styles.first}>
            <JobTitles />
          </div>
          <div style={styles.second}>
            <HomePage />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    );
  }
}

const styles = {
  main: {
    position: "relative",
    flexFlow: "column",
    display: "flex",
    maxWidth: 1100,
  },
  hero: {
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
};
