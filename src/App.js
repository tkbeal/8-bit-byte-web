import React from "react";
// import {
//   HomePage
// LoginPage,
// RegisterPage,
// AboutPage,
// ContactPage
// } from "./components/Page";
import HomePage from "./components/Page/HomePage";
import Page404 from "./components/Page/Page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  render() {
    return (
      <Router>
        <Header />
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <HomePage
                  changeActive={page => {}}
                  clicks={this.state.clicks}
                />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    );
  }
}
