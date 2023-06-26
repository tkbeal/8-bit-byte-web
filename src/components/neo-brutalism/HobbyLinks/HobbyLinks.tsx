import React from "react";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCode,
  faGamepad,
  faC,
} from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Colors, Constants } from "../../../utils";

type LinkProps = {
  title: string;
  icon: IconProp;
  link?: string;
  color: string;
};

const HobbyLink = ({ title, icon, link, color }: LinkProps) => {
  return (
    <StyledLink href={link || "#"} target={link ? "__blank" : "__self"}>
      <BackgroundColor>&nbsp;</BackgroundColor>
      <OffsetColor color={color}>&nbsp;</OffsetColor>
      <Title>
        <FA icon={icon} size="xs" />
        &nbsp; {title}
      </Title>
      <LinkBorder>&nbsp;</LinkBorder>
    </StyledLink>
  );
};

export const BrutalHobbyLinks = () => (
  <Container>
    <HobbyLink
      title="front-end engineer"
      icon={faCode}
      link="https://github.com/tkbeal"
      color={Colors.neo_green20}
    />
    <HobbyLink
      title="coffee enthusiast"
      icon={faCoffee}
      link="https://www.buymeacoffee.com/realkbeal"
      color={"#ffba7b"}
    />
    <HobbyLink title="gamer" icon={faGamepad} color={Colors.neo_purple20} />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 110%;
  align-items: center;
  justify-content: space-between;
  @media (${Constants.MOBILE_WIDTH}) {
    flex-direction: row;
  }
`;

const StyledLink = styled.a`
  z-index: 3;
  position: relative;
  padding: 5px 8px;
  background-color: transparent;
`;

const LinkBorder = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  z-index: 3;
  position: absolute;
  border-radius: 6px;
  top: -2px;
  left: -2px;
  height: 100%;
  width: 100%;
`;

const Title = styled.h3`
  z-index: 3;
  position: relative;
  font-family: "Archivo", sans-serif;
  color: black;
  font-size: 18px;
`;

const OffsetColor = styled.div<{ color: string }>`
  z-index: 2;
  position: absolute;
  border-radius: 6px;
  top: 3px;
  left: 3px;
  height: 102%;
  width: 101%;
  ${({ color }) => `background-color: ${color}`}
`;

const BackgroundColor = styled.div`
  z-index: 1;
  position: absolute;
  background-color: white;
  border-radius: 6px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
