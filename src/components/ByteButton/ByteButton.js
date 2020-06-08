import React from "react";
import { NavLink } from "react-router-dom";
import "./link.css";

const ByteButton = props => {
  let { backgroundColor, textColor, to } = props;
  return (
    <NavLink
      to={to}
      className="byte-button"
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={() => {
        if (props.onClick !== undefined) props.onClick();
      }}
    >
      {props.label}
    </NavLink>
  );
};

export default ByteButton;
