import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ButtonStyle from "styles/button";

const Container = styled.form`
  margin: 20px 0;
`;

const Input = styled.input`
  background-color: #fafafa;
  padding: 0 10px;
  border: 1px solid #333;
  width: 70%;
  height: 30px;
  box-sizing: border-box;
  margin-bottom: 10px;
  &:last-child {
    margin: 0;
  }
`;

const Button = styled.button`
  background: #3897f0;
  border-color: #3897f0;
  color: #fff;
  -webkit-appearance: none;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  width: 70%;
`;

const Agreement = styled.div`
  margin-top: 40px;
  position: relative;
  text-align: center;
  &:before {
    position: absolute;
    background-color: #3897f0;
    width: 82%;
    height: 1px;
    top: 32px;
    left: 50%;
    content: "";
    transform: translate(-50%, 0);
  }

  & span {
    display: inline-block;
    position: relative;
    padding: 0 15px;
    background-color: #fff;
    margin-top: 20px;
    z-index: 5;
  }
  & button {
    color: #385185;
    display: block;
    margin: 20px auto 0 auto;
  }
`;

const GotoJoin = styled.div`
  text-align: center;
`;

const Join = () => {
  return (
    <Fragment>
      <Container>
        <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
        <Input type="email" placeholder="이메일주소" />
        <Input type="password" placeholder="비밀번호" />

        <ButtonStyle type="button">가입</ButtonStyle>
        <Agreement>
          <p>
            가입하면 Instagram의
            <a
              target="_blank"
              href="https://help.instagram.com/581066165581870"
            >
              약관
            </a>
            ,
            <a
              target="_blank"
              href="https://help.instagram.com/519522125107875"
            >
              데이터 정책
            </a>
            및
            <a target="_blank" href="/legal/cookies/">
              쿠키 정책
            </a>
            에 동의하게 됩니다.
          </p>
        </Agreement>
      </Container>

      <GotoJoin>
        <p class="izU2O">
          계정이 있으시다면? <Link to="/">로그인하기</Link>
        </p>
      </GotoJoin>
    </Fragment>
  );
};

export default Join;
