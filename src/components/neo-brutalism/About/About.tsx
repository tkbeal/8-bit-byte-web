import React from "react";
import styled from "styled-components";
import { JobRow } from "./JobRow";
import { Jobs } from "./jobs";
import { Colors, Constants } from "../../../utils";

export const BrutalAbout = () => {
  return (
    <Container id="about">
      <BioContainer>
        <BioTitle>About Me</BioTitle>
        <Bio>
          {`In 2020, I graduated with a Bachelors of Science in Computer Science from the University of Maryland, College Park. Go Terps! Post graduation, I immediately started a full-time role at a series B startup called Snackpass. Over the last 3 years, I've continued to develop my skills as a front-end focused full stack engineer with a love for React and React Native web and mobile app development. I have become more comfortable with backend dev work and server and API architecture, and I'm constantly curious about everything going on in the land of JavaScript.`}
        </Bio>
      </BioContainer>
      <JobsColumn>
        <JobsTitle>Places I have worked</JobsTitle>
        {Jobs.map((job) => (
          <JobRow
            logo={job.logo}
            title={job.title}
            description={job.description}
          />
        ))}
      </JobsColumn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BioContainer = styled.div`
  max-width: 600px;
  text-align: center;
  background-color: ${Colors.neo_purple10};
  padding: 28px 36px 64px 36px;
  border-radius: 12px;
  border: 3px dashed black;
`;

const JobsColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  text-align: center;
  margin-top: 100px;
  gap: 24px;
  background-color: ${Colors.neo_blue10};
  padding: 32px;
  border: 3px solid black;
  border-radius: 12px;
  @media (${Constants.MOBILE_WIDTH}) {
    padding: 32px 90px;
  }
`;

const JobsTitle = styled.p`
  color: black;
  font-size: 36px;
  font-family: "Archivo", sans-serif;
`;

const BioTitle = styled.p`
  font-size: 36px;
  font-family: "Archivo", sans-serif;
  color: black;
  margin-bottom: 20px;
`;

const Bio = styled.p`
  line-height: 1.8rem;
  font-size: 1.1rem;
  font-family: "Archivo", sans-serif;
  color: black;
  text-align: left;
`;
