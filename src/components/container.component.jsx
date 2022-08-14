import React from "react";
import Button from "./button.component";
import InfoLine from "./info-line.component";
import { MainContainer, Title } from "./container.styles";

const Container = () => {
  return (
    <MainContainer>
      <Title>Sentences generator</Title>
      <InfoLine parametrs={{ Name: "Time", Value: "Past" }} />
      <InfoLine parametrs={{ Name: "Time", Value: "Past" }} />
      <InfoLine parametrs={{ Name: "Time", Value: "Past" }} />
      <InfoLine parametrs={{ Name: "Time", Value: "Past" }} />
      <Button />
    </MainContainer>
  );
};

export default Container;
