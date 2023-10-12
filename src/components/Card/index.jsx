import React from "react";
import styled from "styled-components";

import {
  Content,
  Title,
  Description,
  JordanCard,
  JordanContent,
  Blur,
  JordanImg,
  JordanText,
  JordanTemplate,
} from "./styles";

const jordanSneakers = [
  { id: 1, src: "/img/air-jordan-1.png", title: "Mid Dutch Green" },
  { id: 2, src: "/img/air-jordan-2.png", title: "Tropical Twist" },
  { id: 3, src: "/img/air-jordan-3.png", title: "Retro High Court" },
  { id: 4, src: "/img/air-jordan-4.png", title: "Mid Light Smoke" },
  { id: 5, src: "/img/air-jordan-5.png", title: "Mid Black Noble" },
  { id: 6, src: "/img/air-jordan-6.png", title: "Mid Bright Citrus" },
  { id: 7, src: "/img/air-jordan-7.png", title: "Mid Grey Camo" },
  { id: 8, src: "/img/air-jordan-8.png", title: "Mid Carbon Fiber" },
];

const Card = () => {
  return (
    <JordanTemplate>
      <Content>
        <Title>Destaques</Title>
        <Description>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
        </Description>

        <JordanCard>
          {jordanSneakers.map((sneaker) => (
            <JordanContent key={sneaker.id}>
              <JordanImg src={sneaker.src} alt={sneaker.title} />
              <JordanText>{sneaker.title}</JordanText>
              <Blur />
            </JordanContent>
          ))}
        </JordanCard>
      </Content>
    </JordanTemplate>
  );
};

export default Card;
