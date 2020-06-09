import React, { Component } from "react";
import Profile from "./Profile";
// import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
// import { getAction } from "../../redux/reducers";
// import {
//   USER_LOGGED_IN,
//   USER_LOGGED_OUT,
//   CHANGE_ACTIVE_PAGE
// } from "../../redux/actionTypes";
import "./header.css";

class Header extends Component {
  state = {
    top: true
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let y = window.scrollY;
      if (y > 20) {
        if (this.state.top) {
          // Only set state to false if currently true
          this.setState({ top: false });
        }
      } else {
        if (!this.state.top) {
          this.setState({ top: true });
        }
      }
    });
  }

  render() {
    let { top } = this.state;
    return (
      <div className={top ? "header" : "header header-fixed"}>
        <div className="container nav-container">
          <div className="fullnav">
            <div className="logo">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="logo-font">
                  T<span style={{ color: "yellowgreen" }}>.</span>Kevin
                </h1>
              </Link>
            </div>
            <nav className="navbar">
              <NavLink
                exact
                to="/"
                className="navlink"
                activeClassName="navlink-selected"
              >
                Home
                <div className="navlink-line"></div>
              </NavLink>
              <NavLink
                to="/about"
                className="navlink"
                activeClassName="navlink-selected"
              >
                About
                <div className="navlink-line"></div>
              </NavLink>
              <NavLink
                className="navlink"
                activeClassName="navlink-selected"
                to="/contact"
              >
                Contact
                <div className="navlink-line"></div>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

// // Ask me (Kevin) if you don't know how to use this stuff please!
// // These state and dispatch methods are made available through props
// const mapStateToProps = state => {
//   return {
//     loggedIn: state.loggedIn,
//     activePage: state.activePage
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     logout: () => {
//       dispatch(getAction(USER_LOGGED_OUT));
//     },
//     changeActivePage: page => {
//       dispatch(getAction(CHANGE_ACTIVE_PAGE, page));
//     }
//   };
// };

export default Header;
