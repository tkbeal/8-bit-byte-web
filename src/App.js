import React from "react";
import HomePage from "./components/Page/HomePage";
import Footer from "./components/Footer";
import "./App.css";

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
      <div className={this.state.menuOpen ? "fixed" : ""}>
        <main>
          <div className="container">
            <HomePage changeActive={(page) => {}} clicks={this.state.clicks} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
