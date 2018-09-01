import React from "react";
import styled from "styled-components";

import Feed from "components/Feed";

const Container = styled.main`
  background-color: #fafafa;
  padding-top: 50px;
  min-height: calc(100vh - 69px);
  box-sizing: border-box;
`;

const Wrap = styled.article`
  width: 1000px;
  margin: 0 auto;
  display: flex;
`;

const Contents = props => {
  return (
    <Container>
      <Wrap>
        <Feed />
      </Wrap>
    </Container>
  );
};

export default Contents;
