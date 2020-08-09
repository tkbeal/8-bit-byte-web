import React, { Component } from "react";
import firebase from "firebase/app";
// import { connect } from "react-redux";
import { getAction } from "../../redux/reducers";
import { CHANGE_ACTIVE_PAGE } from "../../redux/actionTypes";
import ByteLink from "../ByteButton";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import Snackbar from "../Snackbar";
import "./page.css";
import { Link } from "react-router-dom";

import resume from "../../assets/resume.pdf";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  snackbarRef = React.createRef();

  componentDidMount() {
    this.getClickData();
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
    clicksRef.on("value", (snap) => {
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
      <div className="hero-container">
        <div className="home-hero">
          <h3 style={{ marginTop: 0 }}>Hello, my name is</h3>
          <h1>Kevin Beal</h1>
          <p style={{ color: "white" }}>
            This will be the home of all my future small projects and portfolio
            updates. <br /> It's a little empty right now, but please click the
            FireBase button to let me know you came to visit!
          </p>
          <button className="clicker" onClick={this.handleClick}>
            🔥 Clicks: {clicks}
          </button>
          <a href={resume} download="TKB_Resume.pdf" className="download">
            <h4>
              <FA icon={faFileDownload} size="1x" />
              &nbsp;&nbsp;Download My Resume
            </h4>
            <div className="download-line"></div>
          </a>
        </div>
        <Snackbar ref={this.snackbarRef} />
      </div>
    );
  }
}
