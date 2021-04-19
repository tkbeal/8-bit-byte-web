import React from "react";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faCoffee, faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";

const JobTitles = () => (
  <div>
    <a href="https://github.com/tkbeal" target="__blank">
      <h3>
        <FA icon={faCode} size="xs" />
        &nbsp; full stack engineer
      </h3>
    </a>
    <a href="https://www.buymeacoffee.com/realkbeal" target="__blank">
      <h3>
        <FA icon={faCoffee} size="xs" />
        &nbsp; coffee enthusiast
      </h3>
    </a>
    <h3>
      <FA icon={faGamepad} size="xs" />
      &nbsp; gamer
    </h3>
  </div>
);

export default JobTitles;
