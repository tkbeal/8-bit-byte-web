import Pong from "./Pong";
import React from "react";

const index = ({ game }) => {
  switch (game) {
    case "pong":
      return <Pong />;
    default:
      return <h3>No game selected</h3>;
  }
};

export default index;
