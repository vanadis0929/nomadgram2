import React from "react";
import styled from "styled-components";

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
  font-size: ${props =>
    props.type === "button"
      ? "12px"
      : props.type === "reset"
        ? "40px"
        : props.type === "submit"
          ? "60px"
          : "10px"};
`;

const Anchor = Button.withComponent("a").extend`
  text-decoration: none; 
`;

const ButtonStyle = props => {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
};

export { Anchor }; //anchor을 사용하기위해서 export 시킴 (필수)
export default ButtonStyle;
