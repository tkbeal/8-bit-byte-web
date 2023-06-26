import React from "react";
import styled from "styled-components";

type JobRowProps = {
  logo: string;
  title: string;
  description: string;
};

const LOGO_SIZE = 75;

export const JobRow = ({ logo, title, description }: JobRowProps) => {
  return (
    <Row>
      <ImageContainer>
        <Logo src={logo} />
      </ImageContainer>
      <Description>
        <h3>{title}</h3>
        <p>{description}</p>
      </Description>
    </Row>
  );
};

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

const Logo = styled.img`
  width: ${LOGO_SIZE}px;
  height: ${LOGO_SIZE}px;
  border-radius: 50%;
`;
