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
    <Text>view resume</Text>
  </DownloadResumeButton>
);

const DownloadResumeButton = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${Colors.neo_blue30};
  text-align: center;
  border-radius: 8px;
  color: ${Colors.sesame};
  font-size: 1.1rem;
  border: 2px solid black;
  margin-top: 16px;
  box-shadow: 1px 2px 0 black;
`;

const Text = styled.p`
  font-family: "Archivo", sans-serif;
  color: black;
`;
