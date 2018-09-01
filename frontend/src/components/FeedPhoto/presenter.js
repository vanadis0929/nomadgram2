import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

//https://github.com/akiran/react-slick

const Container = styled.div`
  position: relative;
  text-align: center;
  & img {
    display: block;
    margin: 0 auto;
  }
`;

const FeedPhoto = () => {
  return (
    <Container>
      <div>
        <img src={require("images/feedphoto.jpg")} alt="instagram" />
      </div>
    </Container>
  );
};

export default FeedPhoto;
