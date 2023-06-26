import React from "react";
import { styled } from "styled-components";
import { SocialLinks } from "./SocialLinks";
import { DownloadButton } from "./DownloadButton";
import { BrutalHobbyLinks } from "../HobbyLinks";

export const BrutalHero = () => (
  <Container>
    <NameTagContainer>
      <HelloContainer>
        <HelloMyNameIs>HELLO, my name is</HelloMyNameIs>
      </HelloContainer>
      <BottomContainer>
        <Name>Kevin Beal</Name>
        <JobTitle>I am a software engineer</JobTitle>
        <SocialLinks />
        <DownloadButton />
      </BottomContainer>
    </NameTagContainer>
    <BrutalHobbyLinks />
  </Container>
);

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 100vh;
`;

const NameTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 3px solid black;
  border-top: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px 0;
`;

const HelloContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff686b;
  padding: 20px 0;
  border: 3px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
`;

const HelloMyNameIs = styled.p`
  color: white;
  font-family: "Archivo", sans-serif;
  font-size: 24px;
`;

const Name = styled.p`
  font-family: "Archivo", sans-serif;
  font-size: 36px;
  color: black;
`;

const JobTitle = styled.h2`
  font-weight: 300;
  color: black;
  font-size: 24px;
  font-family: "Archivo", sans-serif;
`;
