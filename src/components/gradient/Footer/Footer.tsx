import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../global_state/hooks";

export const Footer = () => {
  return (
    <Container>
      <div style={{ margin: "auto" }}>
        <p style={{ marginTop: 20, color: "whitesmoke", fontFamily: "Oswald" }}>
          &copy; Copyright 2020 - 2023 Kevin Beal
        </p>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  height: max(10vh, 100px);
  color: var(--byte-grey);
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
