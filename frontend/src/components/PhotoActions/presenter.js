import React from "react";
import styled from "styled-components";
import Ionicon from "react-ionicons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PhotoActions = () => {
  return (
    <Container>
      <div>
        <button type="button">
          <Ionicon icon="md-heart-outline" fontSize="20px" color="#000" />
        </button>
        <button type="button">
          <Ionicon icon="md-heart" fontSize="20px" color="#000" />
        </button>
      </div>
    </Container>
  );
};

export default PhotoActions;
