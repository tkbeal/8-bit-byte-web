import React from "react";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../utils/colors";
import "./down.css";

const GoDown = () => (
  <div style={styles.downContainer}>
    <a href="#about">
      <FA
        icon={faChevronDown}
        size="3x"
        color={Colors.whitesmoke}
        id="chevron-down"
      />
    </a>
  </div>
);

export default GoDown;

const styles = {
  downContainer: {
    position: "relative",
    top: -75,
    display: "flex",
    justifyContent: "center",
  },
};
