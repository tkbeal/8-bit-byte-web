import React from "react";
import {
  GamePage,
  // LoginPage,
  // RegisterPage,
  // AboutPage,
  // ContactPage
} from "./components/Page";
import HomePage from "./components/Page/HomePage";
import Page404 from "./components/Page/Page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SideMenu from "./components/SideMenu/SideMenu";
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
        <Router>
          {this.state.hamburger ? (
            <SideMenu menuOpen={this.state.menuOpen} />
          ) : (
            <></>
          )}
          <ScrollToTop />
          <Header
            hamburger={this.state.hamburger}
            menuOpen={this.state.menuOpen}
            sideMenuToggle={this.sideMenuToggle}
          />
          <main>
            <section id="home">
              <div className="container">
                <Switch>
                  <Route exact path="/">
                    <HomePage
                      changeActive={(page) => {}}
                      clicks={this.state.clicks}
                    />
                  </Route>
                  <Route path="/game">
                    <GamePage
                      changeActive={(page) => {}}
                      clicks={this.state.clicks}
                    />
                  </Route>
                </Switch>
              </div>
            </section>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}
