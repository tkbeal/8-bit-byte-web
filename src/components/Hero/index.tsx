import React from "react";
import { Colors } from "../../utils/colors";
import { styled } from "styled-components";
import { SocialLinks } from "./SocialLinks";
import { DownloadButton } from "./DownloadButton";

export const Hero = () => {
  return (
    <Container>
      <Name>kevin beal</Name>
      <JobTitle>
        swe @ <span style={{ color: Colors.snackpass }}>snackpass</span>
      </JobTitle>
      <SocialLinks />
      <DownloadButton />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 16px;
  @media (min-width: 420px) {
    align-items: start;
  }
`;

const Name = styled.h1`
  line-height: 68px;
  color: ${Colors.whitesmoke};
`;

const JobTitle = styled.h2`
  font-weight: 300;
  line-height: 36px;
`;
