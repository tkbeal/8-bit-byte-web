import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

// Icons
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Colors } from "../../utils/colors";

export const SocialLinks = () => (
  <Container>
    <SocialLink
      href="https://www.facebook.com/realkbeal"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faFacebookF} size="2x" />
    </SocialLink>
    <SocialLink
      href="https://www.linkedin.com/in/kevin-beal/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faLinkedinIn} size="2x" />
    </SocialLink>
    <SocialLink
      href="https://twitter.com/realkbeal"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faTwitter} size="2x" />
    </SocialLink>
    <SocialLink
      href="https://www.instagram.com/realkbeal/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FA icon={faInstagram} size="2x" />
    </SocialLink>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;

const SocialLink = styled.a`
  color: ${Colors.whitesmoke};
`;
