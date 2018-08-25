import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

import Login from "views/login";
import Join from "views/join";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.section`
  text-align: center;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 20px;
  flex: 0.25;
`;

const Logo = styled.h1`
  & img {
    width: 300px;
  }
`;

const AppDownload = styled.dl`
  text-align: center;
  & dt {
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
  }
  & dd {
    display: inline-block;
    width: 33%;
    margin-right: 10px;
    &:last-child {
      margin: 0;
    }
  }
`;

const Auth = () => {
  return (
    <BrowserRouter>
      <Wrap>
        <Container>
          <Logo>
            <img src={require("images/logo.png")} alt="instagram" />
          </Logo>

          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/join" component={Join} />
          </Switch>
        </Container>
        <AppDownload>
          <dt>앱을 다운로드 하세요</dt>
          <dd>
            <button type="button">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                alt="app store에서 다운로드 하기"
              />
            </button>
          </dd>
          <dd>
            <button type="button">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                alt="app store에서 다운로드 하기"
              />
            </button>
          </dd>
        </AppDownload>
      </Wrap>
    </BrowserRouter>
  );
};

export default Auth;
