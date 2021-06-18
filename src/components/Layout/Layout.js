import React from "react";
import { Container } from "../../styles/utils/Container";
import Navbar from "../Navbar/Navbar";

import { LayoutContainerStyled, PageContainerStyled } from "./LayoutStyles";

function Layout({ children }) {
  return (
    <LayoutContainerStyled>
      <Container>
        <Navbar />
        <PageContainerStyled>{children}</PageContainerStyled>
      </Container>
    </LayoutContainerStyled>
  );
}

export default Layout;
