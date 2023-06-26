import React from "react";
import styled from "styled-components";
import { JobRow } from "./JobRow";
import { Jobs } from "./jobs";

export const About = () => {
  return (
    <Container id="about">
      <BioContainer>
        <h2 style={{ marginBottom: 20 }}>about me</h2>
        <Bio>
          {`In 2020, I graduated with a Bachelors of Science in Computer Science
          from the University of Maryland. Go Terps! Post graduation, I
          immediately started a full-time role at a series B startup called
          Snackpass where I have continued to develop my skills as a full-stack
          engineer. Over the last 3 years, I've grown to love React and React
          Native web and mobile app development, be more comfortable with the back end and general server architecture, and be curious about everything in the land of JavaScript.`}
        </Bio>
      </BioContainer>
      <JobsColumn>
        <h2>places i've worked</h2>
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
`;

const JobsColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  text-align: center;
  margin-top: 100px;
  gap: 24px;
`;

const Bio = styled.p`
  line-height: 1.8rem;
  font-size: 1.1rem;
`;
