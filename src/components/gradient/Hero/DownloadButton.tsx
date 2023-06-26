import React from "react";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Colors } from "../../../utils";

// Resume PDF
const resume = require("../../../assets/resume.pdf");

export const DownloadButton = () => (
  <DownloadResumeButton href={resume} download="TKB_Resume.pdf">
    <FA icon={faFileDownload} size="sm" />
    <span style={{ marginLeft: 8 }}>view resume</span>
  </DownloadResumeButton>
);

const DownloadResumeButton = styled.a`
  display: block;
  max-width: 150px;
  padding: 8px 12px;
  background-color: ${Colors.snackpass};
  text-align: center;
  border-radius: 8px;
  color: ${Colors.sesame};
  font-size: 1.1rem;
`;
