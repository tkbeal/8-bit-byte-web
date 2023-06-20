import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { Constants, Colors } from "../../utils";

// Icons
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const SocialLinks = () => (
  <Container>
    <SocialLink
      href="https://www.github.com/tkbeal"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faGithub} size="2x" />
    </SocialLink>
    <SocialLink
      href="https://www.linkedin.com/in/kevin-beal/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faLinkedinIn} size="2x" />
    </SocialLink>
  </Container>
);

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 180px;
  justify-content: center;
  @media (${Constants.MOBILE_WIDTH}) {
    justify-content: start;
  }
`;

const SocialLink = styled.a`
  color: ${Colors.whitesmoke};
`;
