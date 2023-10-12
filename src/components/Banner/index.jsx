import React from "react";

import bannerImage from "/img/banner.jpeg";
import {
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerOverlay,
  BannerTitle,
} from "./styles";

const Banner = () => {
  return (
    <BannerContent>
      <BannerImg src={bannerImage} alt="Banner" />
      <BannerOverlay />
      <BannerTitle>A melhor loja de Jordan</BannerTitle>
      <BannerDescription>
        O tênis Jordan é fruto de uma longa e forte parceria entre a Nike e o
        jogador Michael Jordan.
      </BannerDescription>
    </BannerContent>
  );
};

export default Banner;
