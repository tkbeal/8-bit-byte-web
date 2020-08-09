import React from "react";
import "./hamburger.css";

const Hamburger = ({ open, onClick }) => {
  return (
    <div className="hamburger-container" onClick={() => onClick()}>
      <div className={"burger-1" + (open ? " burger-open" : "")}></div>
      <div className={"burger-2" + (open ? " burger-open" : "")}></div>
      <div className={"burger-3" + (open ? " burger-open" : "")}></div>
    </div>
  );
};

export default Hamburger;
