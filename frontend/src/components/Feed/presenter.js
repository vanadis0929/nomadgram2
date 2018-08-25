import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

const Container = styled.section`
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  margin-bottom: 60px;
  background-color: #fff;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Feed = props => {
  return (
    <Container>
      <div>feed</div>
    </Container>
  );
};
export default Feed;
