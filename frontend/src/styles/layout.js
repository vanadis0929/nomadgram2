import React, { Fragment } from "react";
import styled from "styled-components";

import Header from "styles/header";
import Contents from "styles/contents";
import Footer from "styles/footer";

const Container = styled.article``;

const Layout = props => {
  return (
    <Container>
      <Header />
      <Contents />
      <Footer />
    </Container>
  );
};

export default Layout;
