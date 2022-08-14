import React from "react";
import { Line, LineName } from "./info-line.styles";

const InfoLine = ({ parametrs }) => {
  const { Name, Value } = parametrs;
  return (
    <Line>
      <LineName>{Name}</LineName>
      <span> : </span>
      <span>{Value}</span>
    </Line>
  );
};

export default InfoLine;
