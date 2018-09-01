import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

import UserInfo from "components/UserInfo";
import FeedPhoto from "components/FeedPhoto";

const Container = styled.div`
  border: 1px solid #dedede;
  border-radius: 5px;
  background-color: #fff;
  flex: 0 0 640px;
  display: flex;
  flex-direction: column;
`;

const FeedItems = styled.section`
  position: relative;
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeedBottom = styled.div`
  padding: 0 10px;
`;

const Feed = () => {
  return (
    <Container>
      <FeedItems>
        <UserInfo />
        <FeedPhoto />
        <FeedBottom>aaa</FeedBottom>
      </FeedItems>
    </Container>
  );
};

export default Feed;
