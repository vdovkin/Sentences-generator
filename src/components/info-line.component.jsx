import React from "react";
import { Line, LineName, LineValue } from "./info-line.styles";

const InfoLine = ({ name, value }) => {
  return (
    <Line>
      <LineName>{name}</LineName>
      <span> : </span>
      <LineValue>{value}</LineValue>
    </Line>
  );
};

export default InfoLine;
