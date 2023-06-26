import React from "react";
import styled from "styled-components";

export const BrutalFooter = () => {
  return (
    <Container>
      <div style={{ margin: "auto" }}>
        <Copyright>&copy; Copyright 2020 - 2023 Kevin Beal</Copyright>
      </div>
    </Container>
  );
};

const Copyright = styled.p`
  font-family: "Archivo", sans-serif;
  color: black;
`;

const Container = styled.div`
  height: max(10vh, 100px);
  color: var(--byte-grey);
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
