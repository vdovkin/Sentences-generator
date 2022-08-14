import React, { useState } from "react";
import Button from "./button.component";
import InfoLine from "./info-line.component";
import { MainContainer, Title } from "./container.styles";
import { TIMES, TYPES, VERBS, SUBJECTS } from "../data";

const BaseInfo = [
  {
    id: 1,
    name: "Time",
    value: "",
    options: TIMES,
  },
  {
    id: 2,
    name: "Type",
    value: "",
    options: TYPES,
  },
  {
    id: 3,
    name: "Subject",
    value: "",
    options: SUBJECTS,
  },
  {
    id: 4,
    name: "Verb",
    value: "",
    options: VERBS,
  },
];

const Container = () => {
  const [fieldsInfo, setFieldsInfo] = useState(BaseInfo);

  const RandomGenerator = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const generate = () => {
    const newFieldsInfo = fieldsInfo.map((infoline) => ({
      ...infoline,
      value: RandomGenerator(infoline.options),
    }));
    setFieldsInfo(newFieldsInfo);
  };

  return (
    <MainContainer>
      <Title>Sentences generator</Title>
      {fieldsInfo.map((infoline) => (
        <InfoLine
          key={infoline.id}
          name={infoline.name}
          value={infoline.value}
        />
      ))}
      <Button onClick={generate}>Generate</Button>
    </MainContainer>
  );
};

export default Container;
