import styled from "styled-components";

export const BannerContent = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0.6;
  background-color: #000;
`;

export const BannerTitle = styled.h1`
  position: absolute;
  z-index: 6;
  top: 80px;
  left: 80px;
  font-size: 2.6rem;
  letter-spacing: 1px;
  color: #fff;

  @media (max-width: 480px) {
    width: 80%;
    top: 60px;
    left: 30px;
    font-size: 2rem;
  }
`;

export const BannerDescription = styled.p`
  position: absolute;
  z-index: 6;
  top: 150px;
  left: 80px;
  max-width: 600px;
  width: 50%; 
  font-size: 1.2rem;
  letter-spacing: 2px;
  line-height: 32px;
  color: #f9f9f9;

  @media (max-width: 768px) {
    width: 70%; 
  }

  @media (max-width: 480px) {
    top: 170px;
    left: 30px;
    width: 80%; 
    font-size: 0.9rem;
  }
`;
