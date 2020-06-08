import React from "react";
import firebase from "firebase/app";
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
import Snackbar from "./components/Snackbar";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  snackbarRef = React.createRef();

  componentDidMount() {
    this.getClickData();
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicks !== this.state.clicks) {
      this.writeClickData();
    }
  }

  writeClickData = () => {
    const clicksRef = firebase.database().ref("/clicks");
    clicksRef.set(this.state.clicks);
    // console.log("DATA SAVED");
  };

  getClickData = () => {
    const clicksRef = firebase.database().ref("/clicks");
    clicksRef.on("value", snap => {
      let clicks = snap.val();
      this.setState({ clicks });
      // console.log("DATA RETRIEVED");
    });
  };

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    this.snackbarRef.current.openSnackbar("Thanks for clicking!");
  };

  render() {
    let { clicks } = this.state;
    return (
      <Router>
        <Header />
        <div
          className="body"
          onScroll={() => {
            console.log("scroll");
          }}
        >
          <h2>Welcome to the website of Kevin Beal</h2>
          <p style={{ color: "white" }}>
            Unfortunately, it's still undergoing construction. He is actively
            working on it, so check back in a day or two to see if there have
            been updates!
          </p>
          <p style={{ color: "white" }}>
            In the meantime, please click this button to let him know you came
            to visit!
          </p>
          <button className="clicker" onClick={this.handleClick}>
            <h2>Clicks: {clicks}</h2>
          </button>
        </div>
        {/* //   <Switch>
      //   <Route exact path="/">
      //     <HomePage changeActive={page => {}} />
      //   </Route>
      //   <Route path="*">
      //     <Page404 />
      //   </Route>
      // </Switch> */}
        <Footer />
        <Snackbar ref={this.snackbarRef} />
      </Router>
    );
  }
}
