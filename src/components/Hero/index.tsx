import React from "react";
import { Colors, Constants } from "../../utils";
import { styled } from "styled-components";
import { SocialLinks } from "./SocialLinks";
import { DownloadButton } from "./DownloadButton";

export const Hero = () => {
  return (
    <Container>
      <Name>kevin beal</Name>
      <JobTitle>software engineer</JobTitle>
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
  @media (${Constants.MOBILE_WIDTH}) {
    align-items: start;
  }
`;

const Name = styled.h1`
  line-height: 68px;
  color: ${Colors.whitesmoke};
`;

const JobTitle = styled.h2`
  font-weight: 300;
  color: ${Colors.snackpass};
  line-height: 36px;
`;
