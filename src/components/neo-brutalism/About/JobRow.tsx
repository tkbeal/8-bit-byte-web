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
      <DescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 500px;
  gap: 24px;
`;

const ImageContainer = styled.div`
  width: ${LOGO_SIZE + 4}px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  padding: 2px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
`;

const Logo = styled.img`
  width: ${LOGO_SIZE}px;
  height: ${LOGO_SIZE}px;
  border-radius: 50%;
`;

const Title = styled.p`
  color: black;
  font-family: "Archivo", sans-serif;
  font-size: 24px;
`;

const Description = styled.p`
  color: black;
  font-family: "Archivo", sans-serif;
`;
