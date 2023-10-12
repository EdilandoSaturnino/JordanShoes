import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JordanTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 100px 0;
`;

export const Title = styled.h3`
  margin-top: 0;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  margin: 14px 0 70px 0;
  text-align: center;
  font-size: 1.25rem;
  color: #474747;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 10px 0 50px 0;
  }
`;

export const JordanCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px 15px;
  padding: 0 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 580px) {
    gap: 15px 10px;
    padding: 0 10px;
  }
`;

export const JordanContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.3s;

  :hover {
    opacity: 0.6;
  }
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.2s;
  border-radius: 6px;
  background-color: #000;

  ${JordanContent}:hover & {
    opacity: 0.6;
  }

  @media (max-width: 480px) {
    width: 65%;
  }
`;

export const JordanImg = styled.img`
  padding: 14px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 0 6px #dbdbdb;
  background-color: #ebe9ea;
  max-width: 100%;
  height: auto;
`;

export const JordanText = styled.h1`
  position: absolute;
  z-index: 7;
  bottom: 0;
  opacity: 0;
  text-align: center;
  font-size: 1.375rem;
  letter-spacing: 1px;
  transition: all 0.3s;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  ${JordanContent}:hover & {
    bottom: 40%;
    opacity: 1;
  }
`;
