import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

const Container = styled.section`
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
`;

const UserPhoto = styled.div`
  flex: 0 0 30px;
  margin-right: 15px;
  border: 1px solid #dedede;
  & img {
    border-radius: 100px;
  }
`;

const UserId = styled.p`
  flex: 1;
  font-size: 14px;
  font-weight: 700;
`;

const UserInfo = props => {
  return (
    <Container>
      <UserPhoto>
        <img src="{require("images/profile.jpg")}" alt="" />
      </UserPhoto>
      <UserId>user id</UserId>
    </Container>
  );
};
export default UserInfo;
