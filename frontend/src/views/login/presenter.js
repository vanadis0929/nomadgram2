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

const FaceBookLogin = styled.div`
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

const Login = () => {
  return (
    <Fragment>
      <Container>
        <Input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <Input type="password" placeholder="비밀번호" />

        <ButtonStyle type="button">로그인</ButtonStyle>
        <FaceBookLogin>
          <span>또는</span>
          <button type="button">FaceBook 으로 로그인</button>
        </FaceBookLogin>
      </Container>

      <GotoJoin>
        <p>
          계정이 없으신가요? <Link to="/join">가입하기</Link>
        </p>
      </GotoJoin>
    </Fragment>
  );
};

export default Login;
