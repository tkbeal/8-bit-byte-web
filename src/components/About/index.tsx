import React, { CSSProperties } from "react";
import snackpassLogo from "../../assets/images/snackpass-logo.png";
import marylandLogo from "../../assets/images/maryland-logo.gif";
import targetLogo from "../../assets/images/target-logo.png";
import styled from "styled-components";

const LOGO_SIZE = 75;

const About = () => {
  return (
    <div style={styles.aboutContainer} id="about">
      <div style={styles.innerContainer}>
        <h2 style={{ marginBottom: 20 }}>about me</h2>
        <Bio>
          {`In 2020, I graduated with a Bachelors of Science in Computer Science
          from the University of Maryland. Go terps! Post graduation, I
          immediately started a full-time role at a series C startup called
          Snackpass where I have continued to develop my skills as a full-stack
          engineer. Over the last 3 years, I\'ve grown to love React and React
          Native web and mobile app development, be more comfortable with the back end and general server architecture, and be curious about everything in the land of JavaScript.`}
        </Bio>
      </div>
      <Column>
        <h2>places i've worked</h2>
        <Row>
          <ImageContainer>
            <img src={snackpassLogo} style={styles.logo} />
          </ImageContainer>
          <Description>
            <h3>snackpass</h3>
            <p>software engineer, august 2020 - june 2023</p>
          </Description>
        </Row>
        <Row>
          <ImageContainer>
            <img src={targetLogo} style={styles.logo} />
          </ImageContainer>
          <Description>
            <h3>target</h3>
            <p>software engineering intern, summer 2019</p>
          </Description>
        </Row>
        <Row>
          <ImageContainer>
            <img src={marylandLogo} style={styles.logo} />
          </ImageContainer>
          <Description>
            <h3>university of maryland</h3>
            <p>teaching assistant, august 2019 - july 2020</p>
          </Description>
        </Row>
      </Column>
    </div>
  );
};

export default About;

const styles: { [key: string]: CSSProperties } = {
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerContainer: {
    maxWidth: 600,
    textAlign: "center",
  },
  descriptionText: {
    lineHeight: 1.8,
    fontSize: "1.1rem",
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: 50,
  },
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  text-align: center;
  margin-top: 100px;
  gap: 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: start;
  max-width: 500px;
  gap: 24px;
`;

const ImageContainer = styled.div`
  width: ${LOGO_SIZE + 4}px;
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Bio = styled.p`
  line-height: 1.8rem;
  font-size: 1.1rem;
`;
