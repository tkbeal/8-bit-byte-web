import React from "react";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faCoffee, faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { Constants } from "../../../utils";

export const HobbyLinks = () => (
  <Container>
    <a href="https://github.com/tkbeal" target="__blank">
      <Title>
        <FA icon={faCode} size="xs" />
        &nbsp; front-end engineer
      </Title>
    </a>
    <a href="https://www.buymeacoffee.com/realkbeal" target="__blank">
      <Title>
        <FA icon={faCoffee} size="xs" />
        &nbsp; coffee enthusiast
      </Title>
    </a>
    <Title>
      <FA icon={faGamepad} size="xs" />
      &nbsp; gamer
    </Title>
  </Container>
);

const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media (${Constants.MOBILE_WIDTH}) {
    align-items: end;
  }
`;

const Title = styled.h3`
  text-align: left;
`;
