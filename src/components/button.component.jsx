import React from "react";
import { MainButton } from "./button.styles";

const Button = ({ children, ...otherProps }) => {
  return <MainButton {...otherProps}>{children}</MainButton>;
};

export default Button;
