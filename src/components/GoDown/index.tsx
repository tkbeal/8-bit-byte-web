import React from "react";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../utils";
import styled from "styled-components";

export const GoDown = () => (
  <Container>
    <a href="#about">
      <ChevronDown icon={faChevronDown} size="3x" color={Colors.whitesmoke} />
    </a>
  </Container>
);

const Container = styled.div`
  position: relative;
  top: -75px;
  display: flex;
  justify-content: center;
`;

const ChevronDown = styled(FA)`
  position: relative;
  animation-name: chevron-bounce;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  @keyframes chevron-bounce {
    0% {
      top: 0px;
    }
    50% {
      top: 10px;
    }
    100% {
      top: 0px;
    }
  }
`;
