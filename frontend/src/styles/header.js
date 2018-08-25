import React from "react";
import styled from "styled-components";
import Ionicon from "react-ionicons";

const Container = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  border-bottom: 1px solid #eee;
  & .wrap {
    padding: 10px 0;
  }
`;

const Logo = styled.h1`
  flex: 0 0 150px;
`;

const Form = styled.form`
  flex: 0.4;
  & input {
    width: 100%;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    text-align: center;
    &:focus {
      text-align: left;
    }
  }
`;

const Util = styled.div`
  & > * {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <div className="wrap alignCenter">
        <Logo>
          <img src={require("images/logo.png")} alt="instagram" />
        </Logo>
        <Form action="">
          <input type="search" placeholder="검색" />
        </Form>

        <Util>
          <button type="button">
            <Ionicon icon="md-globe" fontSize="30px" color="#000" />
          </button>
          <button type="button">
            <Ionicon icon="md-heart-outline" fontSize="30px" color="#000" />
          </button>
          <button type="button">
            <Ionicon icon="md-people" fontSize="30px" color="#000" />
          </button>
        </Util>
      </div>
    </Container>
  );
};

export default Header;
