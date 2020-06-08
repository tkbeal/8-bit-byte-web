import React, { PureComponent } from "react";
import "./snackbar.css";

class Snackbar extends PureComponent {
  message = "";
  state = {
    active: false
  };

  openSnackbar = (message = "Something went wrong...") => {
    this.message = message;
    this.setState({ active: true }, () => {
      setTimeout(() => {
        this.setState({ active: false });
      }, 2000); // 2 seconds
    });
  };

  render() {
    let { active } = this.state;
    return (
      <div className={active ? "snackbar show" : "snackbar"}>
        {this.message}
      </div>
    );
  }
}

export default Snackbar;
