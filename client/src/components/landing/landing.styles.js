import { styled, keyframes } from "styled-components";
import bgImg from "../../../public/images/Canopus.png";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -1.5rem;
  @media (max-width: 920px) {
    margin: -2.5rem;
  }
  background-image: url(${bgImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 200px;
  height: auto;
  @media (max-width: 920px) {
    width: 150px;
    height: auto;
  }
  @media (max-width: 490px) {
    width: 100px;
    height: auto;
  }
`;

export const ImageContainer2 = styled.div`
  margin: -2.8rem;
`;

export const Image2 = styled.img`
  width: 900px;
  height: auto;
  @media (max-width: 920px) {
    width: 450px;
    height: auto;
  }
  @media (max-width: 490px) {
    width: 300px;
    height: auto;
  }
`;

export const ImageContainer3 = styled.div`
  margin: -2.8rem;

  @media (max-width: 920px) {
    margin: -1rem;
  }
  @media (max-width: 490px) {
    margin: 0.2em;
  }
`;

export const Image3 = styled.img`
  width: 600px;
  height: auto;
  animation: ${floatAnimation} 2s ease-in-out infinite;
  @media (max-width: 920px) {
    width: 400px;
    height: auto;
  }
  @media (max-width: 490px) {
    width: 250px;
    height: auto;
  }
`;

export const ImageContainer4 = styled.div`
  margin: -7rem 0 -3rem 0;
  @media (max-width: 920px) {
    margin: -4rem 0 0 0;
  }
  @media (max-width: 490px) {
    margin: -3.5rem 0 0 0;
  }
`;

export const Image4 = styled.img`
  width: 1000px;
  height: auto;
  @media (max-width: 920px) {
    width: 500px;
    height: auto;
  }
  @media (max-width: 490px) {
    width: 310px;
    height: auto;
  }
`;

export const ImageContainer5 = styled.div`
  position: absolute;
  right: -78px;
  top: 47%;
  transform: translateY(-50%);
  @media (max-width: 920px) {
    right: -16%;
  }
  @media (max-width: 490px) {
    right: -15%;
  }
`;

export const Image5 = styled.img`
  width: 100px;
  height: auto;
  @media (max-width: 920px) {
    width: 50px;
  }
  @media (max-width: 490px) {
    width: 30px;
  }
`;

export const ImageContainer6 = styled.div`
  position: absolute;
  left: -75px;
  top: 60%;
  transform: translateY(-50%);
  @media (max-width: 920px) {
    left: -20%;
  }
  @media (max-width: 490px) {
    left: -15%;
  }
`;

export const Image6 = styled.img`
  width: 100px;
  height: auto;
  @media (max-width: 920px) {
    width: 50px;
  }
  @media (max-width: 490px) {
    width: 30px;
  }
`;

export const HeroSubHeading = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.font};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  margin: ${({ theme }) => theme.typography.sizes.xs} 0 ${({ theme }) => theme.typography.sizes.xs} 0;
  @media (max-width: 920px) {
    margin: 0.5rem 0 1.15rem 0;
    font-size: 0.6rem;
  }
  @media (max-width: 490px) {
    margin: 0.5rem 0 1.5rem 0;
    font-size: 0.45rem;
  }
`;

export const HeroHeadingLine1 = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.font};
  font-size: 6rem;
  margin: -2rem;
  padding: 0;
  position: relative;
  @media (max-width: 920px) {
    font-size: 3rem;
  }
  @media (max-width: 490px) {
    font-size: 2rem;
  }
`;

export const HeroHeadingLine2 = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.font};
  font-size: 6rem;
  margin: -1.5rem 0 -1rem 0;
  position: relative;
  @media (max-width: 920px) {
    font-size: 3rem;
    margin: 0.2rem 0 1rem 0;
  }
  @media (max-width: 490px) {
    font-size: 2rem;
    margin: 1rem 0 1.8rem 0;
  }
`;

